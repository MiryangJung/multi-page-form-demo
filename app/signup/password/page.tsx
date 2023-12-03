"use client";

import { Button } from "@/components/ui/ui/button";
import { useFormContext } from "react-hook-form";
import { SignUpFormValues } from "../components/signup-form-schema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/ui/form";
import { Input } from "@/components/ui/ui/input";

export default function PasswordFormPage() {
  const {
    control,
    formState: { isSubmitting, errors },
  } = useFormContext<SignUpFormValues>();

  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl font-bold">
              Please enter password
            </FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="passwordCheck"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" className="mt-5" disabled={isSubmitting}>
        Submit
      </Button>
    </main>
  );
}
