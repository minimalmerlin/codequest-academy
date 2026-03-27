import { ProfilePageClient } from "@/components/ProfilePageClient";
import { AuthGuard } from "@/components/AuthGuard";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  return (
    <AuthGuard>
      <ProfilePageClient profileId={profileId} />
    </AuthGuard>
  );
}
