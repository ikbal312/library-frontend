import AddToResevationButton from "../client/reservation/AddToResevationButton";
import AddToBorrowCollapse from "../client/borrow/AddToBorrowCollapse";
import BookImage from "../client/book/BookImage";
import { AuthenticatedUser } from "@/lib/auth";
import AddToWishListButton from "../client/wishlist/AddToWishListButton";

export default async function BookDetails({ details }: { details: Book }) {
  const auth = await AuthenticatedUser();

  return (
    <>
      <figure className=" pt-10">
        <BookImage details={{ id: details.id, image: details.image }} />
      </figure>
      <section className="card-body">
        <h2 className="card-title">Title: {details.title}</h2>
        <div className="text-sm">Author: {details.author}</div>
        <div className="text-sm">Genre: {details.genre}</div>
        <div className="text-sm">ISBN: {details.isbn}</div>
        <div className="text-sm">
          Published_date: {details.publication_date}
        </div>
        <div className="badge badge-outline">stock: {details.stock}</div>
        <div className="badge badge-outline">status: {details.status}</div>
      {auth ? (
        <>
          <section className="flex place-content-around ">
            <AddToWishListButton id={details.id} />
            <AddToResevationButton id={details.id} />
          </section>
          <AddToBorrowCollapse id={details.id} />

        </>
      ) : (
        <></>
        )}
        </section>
    </>
  );
}
