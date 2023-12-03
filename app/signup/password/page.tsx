"use client";

import { Button } from "@/components/ui/ui/button";
import { useFormContext } from "react-hook-form";
import { SignUpFormValues } from "../components/signup-form-schema";

export default function PasswordFormPage() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<SignUpFormValues>();

  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      <label className="text-2xl font-bold">Please enter password</label>

      <input
        {...register("password")}
        type="password"
        className="border border-gray-300 rounded-md p-2 outline-none"
      />

      {errors.password && (
        <span className="text-sm text-rose-500">{errors.password.message}</span>
      )}

      <input
        {...register("passwordCheck")}
        type="password"
        className="border border-gray-300 rounded-md p-2 outline-none"
      />

      {errors.passwordCheck && (
        <span className="text-sm text-rose-500">
          {errors.passwordCheck.message}
        </span>
      )}

      <Button type="submit" className="mt-5" disabled={isSubmitting}>
        Submit
      </Button>
    </main>
  );
}
