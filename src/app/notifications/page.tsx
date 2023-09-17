import { AuthenticatedUser } from "@/lib/auth";
import getNotification from "@/lib/notification";
import { Metadata } from "next";
import Link from "next/link";

export default async function NotificationPage() {
  const res = await getNotification();
  const auth = await AuthenticatedUser();
  if (!res.ok) return <div>Notificatio empty</div>;
  const notifications = res.data;
  const table = (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Message</th>
                  <th className="py-3 px-6 text-left">Details</th>
                  <th className="py-3 px-6 text-left">link</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {notifications.map((book) => {
                  return (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="items-center">
                          <span className="font-medium">
                            {book.title} is now available
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="items-center">
                          <div>
                            <span>Title: </span> {book.title}
                          </div>
                          <div>
                            <span>Author: </span> {book.author}
                          </div>
                          <div>
                            <span>Status: </span> {book.status}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="items-center">
                          <Link className="link" href={`book/${book.id}`}>
                            view
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  return auth ? table : <></>;
}
export const metadata: Metadata = {
  title: "notifications",
};
