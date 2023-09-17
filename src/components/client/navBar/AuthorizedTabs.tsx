"use client";
import { logoutUser } from "@/lib/auth";
import Indicator from "@/components/Indicator";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const enum Path {
  BOOKS = "/book",
  WISHLIST = "/wishlist",
  NOTIFICATION = "/notifications",
  REMINDER = "/reminder",
}

export default function AuthorizedTabs() {
  const activeClass = "indicator   tab tab-lifted tab-active";
  const initialClass = "indicator  tab tab-lifted ";
  const pathname = usePathname();

  return (
    <>
      <Link
        href={Path.BOOKS}
        className={Path.BOOKS === pathname ? activeClass : initialClass}
      >
        Books
      </Link>
      <Link
        href={Path.WISHLIST}
        className={Path.WISHLIST === pathname ? activeClass : initialClass}
      >
        Wishlist
      </Link>
    
        <Link
          href={Path.NOTIFICATION}
          className={
            Path.NOTIFICATION === pathname ? activeClass : initialClass
          }
        >
          Notifications
        </Link>
   
        <Link
          href={Path.REMINDER}
          className={Path.REMINDER === pathname ? activeClass : initialClass}
        >
          Reminder
        </Link>
 
      <ProfileTab />
    </>
  );
}

function ProfileTab() {
  const router = useRouter();
  return (
    <div className="tab mb-3 ml-3">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <section
              onClick={async () => {
                await logoutUser();
                router.push("/book");
              }}
            >
              Logout
            </section>
          </li>
        </ul>
      </div>
    </div>
  );
}
