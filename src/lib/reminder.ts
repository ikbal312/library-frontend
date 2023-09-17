import afetch from "./afetch";
const source = 'api/services/reminder/'

type ReminderResponse = {
    ok: boolean,
    data: Reminder[]
}
export default async function getReminderList(): Promise<ReminderResponse> {
    const res = await afetch(source, { method: "GET" })
    if (res.status !== 200) return { ok:false,data:[] }
    const data = await res.json();
    const array = Array.isArray(data) && data.length;
    if (!array) return { ok:false,data:[] }
    return { ok:true, data: data }
}