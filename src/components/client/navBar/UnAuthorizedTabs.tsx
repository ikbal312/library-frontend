'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const enum Path {
  BOOKS = "/book",
  LOGIN = "/login",
  REGISTER = "/register",
}
export default function UnauthorizedTabs() {
    const activeClass = "indicator   tab tab-lifted tab-active";
    const initialClass = "indicator  tab tab-lifted ";
  const pathname = usePathname();
  return (
    <>
      <Link
        href={Path.BOOKS}
        className={
          Path.BOOKS === pathname ? activeClass : initialClass
        }
      >
        Books
      </Link>

      <Link
        href={Path.LOGIN}
        className={
          Path.LOGIN === pathname ? activeClass : initialClass
        }
      >
        Login
      </Link>

      <Link
        href={Path.REGISTER}
        className={
          Path.REGISTER === pathname
            ? activeClass
            : initialClass
        }
      >
        Register
      </Link>
    </>
  );
}
