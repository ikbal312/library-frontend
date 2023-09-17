import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Tabs from "@/components/navBar/Tabs";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Library",
  description: "Library",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <nav className="navbar bg-base-100 mt-2 pr-10">
          <section className="flex-1">
            <Link href="/book" className="btn btn-ghost normal-case text-xl">
              Library
            </Link>
          </section>
          <Tabs />
        </nav>
        {children}
      </body>
    </html>
  );
}
