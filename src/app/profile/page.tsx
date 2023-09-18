import Profile from "@/components/Profile";
import { AuthenticatedUser } from "@/lib/auth";
import getProfile from "@/lib/profile";
import Link from "next/link";

export default async function ProfilePage() {
  const auth = await AuthenticatedUser();
  const res = await getProfile();
  const data = await res.data;
  const temp = (
    <div className="grid">
      <Profile data={data} />
      <Link href="/profile/edit/" className="btn btn-secondary justify-self-end mr-4 mt-2">Edit</Link>
    </div>
  );
  return auth && res.ok ? temp : <></>;
}
