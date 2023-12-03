import { z } from "zod";

export const signUpFormSchema = z
  .object({
    email: z.string().email({
      message: "Email format is not valid.",
    }),
    password: z
      .string()
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9]).{2,20}$/,
        "Please enter at least 2 characters that combine numbers."
      ),
    passwordCheck: z.string(),
    job: z
      .object({
        name: z.string().min(1),
        other: z.string(),
      })
      .refine(({ name, other }) => !(name === "other" && other === ""), {
        message: "Please enter your job.",
        path: ["other"],
      }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "Please check the password",
  });

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export const defaultValues: SignUpFormValues = {
  email: "",
  password: "",
  passwordCheck: "",
  job: {
    name: "",
    other: "",
  },
};
