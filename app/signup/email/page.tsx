"use client";

import { Button } from "@/components/ui/ui/button";
import { useFormContext } from "react-hook-form";
import { SignUpFormValues } from "../components/signup-form-schema";
import { useRouter } from "next/navigation";

export default function EmailFormPage() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<SignUpFormValues>();

  const onClickNext = async () => {
    const isValid = await trigger("email");
    if (isValid) {
      router.push("/signup/password");
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      <label className="text-2xl font-bold">Please enter email</label>

      <input
        {...register("email")}
        type="email"
        inputMode="email"
        className="border border-gray-300 rounded-md p-2 outline-none"
      />

      {errors.email && (
        <span className="text-sm text-rose-500">{errors.email.message}</span>
      )}

      <Button type="button" onClick={onClickNext} className="mt-5">
        Next
      </Button>
    </main>
  );
}
