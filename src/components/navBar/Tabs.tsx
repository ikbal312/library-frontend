import { AuthenticatedUser } from "@/lib/auth";
import AuthorizedTabs from "../client/navBar/AuthorizedTabs";
import UnauthorizedTabs from "../client/navBar/UnAuthorizedTabs";
export default async function Tabs() {
  const auth = await AuthenticatedUser();
  return (
    <div className="flex-none tabs ">
      {auth ? <AuthorizedTabs /> : <UnauthorizedTabs />}
    </div>
  );
}
