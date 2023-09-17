"use server";
import afetch from "./afetch";
const source = "api/services/wishlist/";

type WishlistResponse = {
  ok: boolean;
  data: Book[];
};
export default async function getWishlist(): Promise<WishlistResponse> {
  const res = await afetch(source, {
    method: "GET",
  });
  const failedResponse = { ok: false, data: [] };
  if (!res.ok) return failedResponse;
  const data = await res.json();
  const array = Array.isArray(data) && data.length;
  if (!array) return failedResponse;
  return { ok: true, data: data };
}

export async function addToWishlist(id: BookId) {
  const body = JSON.stringify({ book: id });
  const res = await afetch(source, { method: "POST", body: body });
  if (!res.ok) return false;
  return true;
}

type DeleteResponse = {
  ok: boolean;
};

export async function deleteItemWishlist(id: BookId): Promise<DeleteResponse> {
  const URL = source + `${id}/`;
  const res = await afetch(URL, { method: "DELETE" });
  if (!res.ok) return { ok: false };
  if (res.status == 204) return { ok: true };
  return { ok: false };
}
