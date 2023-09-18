"use server";

import { updateProfile } from "@/lib/profile";

export default async function onProfileFormSubmit(formData:FormData) {
  const firstName = formData.get("first-name")?.toString()||"";
  const lastName = formData.get("last-name")?.toString()||"";
  const data = {first_name:firstName,last_name:lastName}
  const res  = await updateProfile(data)
}
