import { userToken } from "./auth";
import { API_BASE_URL } from "./constants";

export default async function afetch(
  url: RequestInfo | URL,
  init: RequestInit
): Promise<Response> {
  const URL =   API_BASE_URL + "/"+url;
  try {
    const tokens = await userToken();
    const accessToken = "JWT " + tokens.access;
    const headers = {
      "Content-Type": "application/json",
      ...init.headers,
      Authorization: accessToken,
    };
    return await fetch(URL, { ...init, headers: headers });
  } catch (error) {
    return await fetch(URL, { ...init });
  }
}