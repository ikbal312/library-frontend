
import DeleteWishlistItemButton from "@/components/client/wishlist/DeleteFromWishlishButton";
import { AuthenticatedUser } from "@/lib/auth";
import getWishlist from "@/lib/wishlist";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export default async function WishlistPage() {
  const res = await getWishlist();
  const auth = await AuthenticatedUser();
  const wishlist = res.data;
  const table = (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Book Details</th>

                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {wishlist.map((book) => {
                  return (
                    <Suspense fallback={<div>Loading...</div>}>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="font-medium">
                              <div>
                                <span>Title: </span> {book.title}
                              </div>
                              <div>
                                <span>Author: </span> {book.author}
                              </div>
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span
                            className={
                              book.status == "available"
                                ? "bg-green-300 text-slate-600 py-1 px-3 rounded-full text-xs"
                                : "bg-red-100 text-slate-600 py-1 px-3 rounded-full text-xs"
                            }
                          >
                            {book.status}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <Link
                              href={`book/${book.id}`}
                              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </Link>
                            <DeleteWishlistItemButton id={book.id} />
                          </div>
                        </td>
                      </tr>
                    </Suspense>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  const empty = <h1>wishlist empty</h1>;
  let view = res.ok && auth  ? table : empty;
  return view;
}

export const metadata: Metadata = {
  title: "wishlist",
};
