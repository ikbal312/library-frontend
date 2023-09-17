import afetch from "./afetch";
export default async function getNotification() {
  const source = "api/services/notification/";
  const res = await afetch(source, {
    method: "GET",
  });
  if (!res.ok) return { ok: false, data: [] };
  const data = await res.json();
  const array = Array.isArray(data) && data.length;
  if (!array) return { ok: false, data: [] };
  return { ok: true, data: data };
}
