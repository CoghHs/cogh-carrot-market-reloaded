"use server";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");

const checkPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;
const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string !",
        required_error: "Whare is my Username ?!",
      })
      .min(3, "너무 짧아요 !")
      .max(10, "너무 길어요 !")
      .refine(checkUsername, "No potatoes allowed"),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
  })
  .refine(checkPassword, {
    message: "Both passwords should be the same!",
    path: ["confirmPassword"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  }
}
