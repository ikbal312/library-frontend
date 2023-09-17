import afetch from "./afetch";
const source = "api/book/";
export default async function getBookList() {
  const res = await afetch(source, { method: "GET" });
  if (!res.ok) return { ok: false, data: [] };
  const data = await res.json();
  const array = Array.isArray(data) && data.length;
  if (!array) return { ok: false, data: data };
  return {ok:true,data:data}
}

export async function getBook(id: BookId) {
  const url = source + `${id}/`;
  console.log(url)
  const res = await afetch(url, { method: "GET" });
  if (!res.ok) return { ok: false, data: {} };
  const data = await res.json();
  const obj = Object.keys(data).length >= 0;
  if (!obj) return { ok: false, data: {} };
  return { ok: true, data: data };
}
