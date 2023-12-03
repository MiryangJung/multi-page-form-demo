"use client";

import { Button } from "@/components/ui/ui/button";
import { useFormContext } from "react-hook-form";
import { SignUpFormValues } from "../components/signup-form-schema";
import { useRouter } from "next/navigation";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/ui/select";
import { Input } from "@/components/ui/ui/input";

export default function JobFormPage() {
  const router = useRouter();
  const { control, watch, trigger } = useFormContext<SignUpFormValues>();

  const { name } = watch("job");

  const onClickNext = async () => {
    const isValid = await trigger("job");
    if (isValid) {
      router.push("/signup/email");
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      <FormField
        control={control}
        name="job.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl font-bold">
              Please enter job
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Job" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="engineer">Engineer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {name === "other" && (
        <FormField
          control={control}
          name="job.other"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Manager" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <Button type="button" onClick={onClickNext} className="mt-5">
        Next
      </Button>
    </main>
  );
}
