import afetch from "./afetch";


const source = "api/user/profile/";
export default async function getProfile() {
  const res = await afetch(source, { method: "GET" });
  if (!res.ok) return { ok: false, data: {} };
  const data = await res.json();
  return { ok: true, data: data };
}



export  async function updateProfile(data:Profile){
  const body = JSON.stringify(data)
  const res  = await afetch(source,{method:"PATCH",body:body})
  if(!res.ok)return {ok:false}
  return {ok:true}
}