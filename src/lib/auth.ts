"use server";
import CryptoJS from "crypto-js";
import { LogInSchemaType } from "./schema";
import { deleteCookies, getCookiesJWT, setCookiesJWT } from "./cookies";
import afetch from "./afetch";
export async function loginUser(userData: LogInSchemaType) {
  const source = "api/user/login/";
  const res = await afetch(source, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!res.ok) return false;

  const token = await res.json();
  const stringifyToken = JSON.stringify(token);
  const encryptedToken = await EncryptedToken(stringifyToken);
  setCookiesJWT(encryptedToken);
  return true;
}
const getJwtSecretKey = async () => {
  const salt = process.env.JWT_SALT;
  const intrigity_salt = "a1b2";
  if (salt === undefined || salt.length === 0) {
    throw new Error("JWT_SALT not fount in .env file");
  }
  if (salt.length < 123) {
    throw new Error("JWT_SALT must contain 123 or more character");
  }
  return { salt, intrigity_salt };
};

export const EncryptedToken = async (token: string) => {
  const { salt, intrigity_salt } = await getJwtSecretKey();
  const data = intrigity_salt + JSON.stringify(token);
  return CryptoJS.AES.encrypt(data, salt).toString();
};

export async function DecryptedToken(encryptedToken: string) {
  const { salt, intrigity_salt } = await getJwtSecretKey();
  const bytes = CryptoJS.AES.decrypt(encryptedToken, salt);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  const extra_salt = decryptedData.slice(0, intrigity_salt.length);
  const data = decryptedData.slice(intrigity_salt.length, decryptedData.length);
  if (extra_salt != intrigity_salt) throw new Error("invalid TokenData");
  const dataJSON = await JSON.parse(data);
  return dataJSON;
}

export async function userToken() {
  const encryptToken = getCookiesJWT();
  const decryptToken = await DecryptedToken(encryptToken);
  const dataJSON = await JSON.parse(decryptToken);
  return dataJSON;
}

export async function AuthenticatedUser() {
  try {
    const token = await userToken();
  } catch (error) {
    return false;
  }
  return true;
}

export async function logoutUser() {
  deleteCookies();
}

