import { cookies } from "next/headers";
import { cookiesTokenName } from "./constants";

export function getCookiesJWT() {
  const jwtToken = cookies().get(cookiesTokenName)?.value;
  if (jwtToken == undefined) throw new Error("jwt token not found");
  return jwtToken;
}

export async function setCookiesJWT(token: string) {
  cookies().set(cookiesTokenName, token, { sameSite: "strict" });
}

export function deleteCookies() {
  cookies().delete("jwttoken");
}
