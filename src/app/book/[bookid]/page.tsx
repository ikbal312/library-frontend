
import BookDetails from "@/components/book/BookDetails";
import { getBook } from "@/lib/book";
type BookView = {
  params: {
    bookid: BookId;
  };
};
export default async function BookViewPage({ params: { bookid } }: BookView) {
  const res = await getBook(bookid);
  if (!res.ok) return <div>No Book Available</div>;
  const bookDetails = res.data;
  const page = (
    <div className="grid place-items-start">
      <BookDetails details={bookDetails} />
    </div>
  );

  return bookDetails && page;
}

export async function generateMetadata({ params }) {
  let metadata = {
    title: "not found",
  };
  const res = await getBook(params.bookid);
  if (!res.ok) return metadata;
  const bookDetails = res.data;
  metadata = {
    title: bookDetails.title,
  };
  return metadata 
}
