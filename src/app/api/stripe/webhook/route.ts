import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import type Stripe from "stripe";

// App Router liest body als Text — kein bodyParser config nötig
async function upsertSubscription(
  userId: string,
  customerId: string,
  subscription: Stripe.Subscription,
) {
  const supabaseAdmin = getSupabaseAdmin();
  // In Stripe v21, current_period_end wurde auf SubscriptionItem verschoben
  const periodEnd = subscription.items.data[0]?.current_period_end;
  await supabaseAdmin
    .from("subscriptions" as never)
    .upsert({
      user_id: userId,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscription.id,
      status: subscription.status,
      current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id" });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error("[webhook] Signaturprüfung fehlgeschlagen:", err);
    return NextResponse.json({ error: "Ungültige Signatur" }, { status: 400 });
  }

  const supabaseAdmin = getSupabaseAdmin();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.supabase_user_id;
        if (!userId || !session.customer || !session.subscription) break;

        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string,
        );
        await upsertSubscription(userId, session.customer as string, subscription);
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(subscription.customer as string);
        if (customer.deleted) break;
        const userId = (customer as Stripe.Customer).metadata?.supabase_user_id;
        if (!userId) break;
        await upsertSubscription(userId, subscription.customer as string, subscription);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await supabaseAdmin
          .from("subscriptions" as never)
          .update({ status: "canceled", updated_at: new Date().toISOString() })
          .eq("stripe_subscription_id", subscription.id);
        break;
      }

      case "invoice.payment_failed": {
        // In Stripe v21: subscription ID ist unter invoice.parent.subscription_details.subscription
        const invoice = event.data.object as Stripe.Invoice;
        const subId = invoice.parent?.subscription_details?.subscription;
        if (!subId) break;
        await supabaseAdmin
          .from("subscriptions" as never)
          .update({ status: "past_due", updated_at: new Date().toISOString() })
          .eq("stripe_subscription_id", typeof subId === "string" ? subId : subId.id);
        break;
      }
    }
  } catch (err) {
    console.error("[webhook] Event-Verarbeitung fehlgeschlagen:", err);
    // 200 zurückgeben damit Stripe nicht erneut sendet (idempotent)
  }

  return NextResponse.json({ received: true });
}
