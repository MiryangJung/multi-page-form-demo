"use client";

import { Button } from "@/components/ui/ui/button";
import { useFormContext } from "react-hook-form";
import { SignUpFormValues } from "../components/signup-form-schema";
import { useRouter } from "next/navigation";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/ui/form";
import { Input } from "@/components/ui/ui/input";

export default function EmailFormPage() {
  const router = useRouter();
  const { control, trigger } = useFormContext<SignUpFormValues>();

  const onClickNext = async () => {
    const isValid = await trigger("email");
    if (isValid) {
      router.push("/signup/password");
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl font-bold">
              Please enter email
            </FormLabel>
            <FormControl>
              <Input
                placeholder="miryang.dev@gmail.com"
                inputMode="email"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="button" onClick={onClickNext} className="mt-5">
        Next
      </Button>
    </main>
  );
}
