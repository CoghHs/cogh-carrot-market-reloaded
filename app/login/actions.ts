"use server";

import { redirect } from "next/dist/server/api-utils";

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("logged in");
  return {
    errors: ["wrong password", "password too short"],
  };
}
