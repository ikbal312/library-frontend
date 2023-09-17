
import { Suspense } from "react";
import Loading from "./loading";
import getBookList from "@/lib/book";
import { Metadata } from "next";
import BookInfoCard from "@/components/book/Book";
import BookDetails from "@/components/book/BookDetails";

export default async function BookListPage() {
  const res = await getBookList();
  if (!res.ok) return <div>No Book Available</div>;
  const books = await res.data;
  
  
  const content =  (
    <div>
      <div className="flex flex-wrap place-content-center items-baseline  gap-x-5 gap-y-3 ">
        {books.map((book: Book) => {
          return (
            <Suspense fallback={<Loading />}>
              <BookInfoCard id={book.id}>
                <BookDetails details={book} />
              </BookInfoCard>
            </Suspense>
          );
        })}
      </div>
    </div>
  );
  return content
}


export const metadata: Metadata = {
  title: "Book",
  description: "book catalogs",
  
};