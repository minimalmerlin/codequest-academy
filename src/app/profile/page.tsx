import { ProfilePageClient } from "@/components/ProfilePageClient";
import { AuthGuard } from "@/components/AuthGuard";

export const metadata = { title: "Mein Profil" };

export default function ProfilePage() {
  return (
    <AuthGuard>
      <ProfilePageClient />
    </AuthGuard>
  );
}
