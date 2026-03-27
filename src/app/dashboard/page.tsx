import { DashboardClient } from "@/components/DashboardClient";
import { AuthGuard } from "@/components/AuthGuard";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <DashboardClient />
      </div>
    </AuthGuard>
  );
}

