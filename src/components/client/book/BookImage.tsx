"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function BookImage({
  details,
}: {
  details: { id: BookId; image: string };
}) {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = (id: string) => {
    const path = pathname + `/${id}/`;
    if (pathname.includes(id)) {
      return;
    }
    router.push(path);
  };
  return (
    <Image
      onClick={() => {
        handleClick(details.id);
      }}
      className="hover:scale-110"
      src={details.image}
      width={220}
      height={220}
      alt="book-image"
    />
  );
}
