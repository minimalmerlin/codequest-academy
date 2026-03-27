import { ProfilePageClient } from "@/components/ProfilePageClient";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  return <ProfilePageClient profileId={profileId} />;
}
