"use client";

import { Button } from "@/components/ui/ui/button";
import { useFormContext } from "react-hook-form";
import { SignUpFormValues } from "../components/signup-form-schema";
import { useRouter } from "next/navigation";

export default function JobFormPage() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = useFormContext<SignUpFormValues>();

  const { name } = watch("job");

  const onClickNext = async () => {
    const isValid = await trigger("job");
    if (isValid) {
      router.push("/signup/email");
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      <label className="text-2xl font-bold">Please enter job</label>

      <select
        {...register("job.name")}
        className="border border-gray-300 rounded-md p-2 outline-none"
        placeholder="Please select job"
      >
        <option value="" disabled>
          Please select job
        </option>
        <option value="engineer">Engineer</option>
        <option value="designer">Designer</option>
        <option value="other">Other</option>
      </select>

      {name === "other" && (
        <input
          {...register("job.other")}
          type="text"
          className="border border-gray-300 rounded-md p-2 outline-none"
        />
      )}

      {errors.job?.name && (
        <span className="text-sm text-rose-500">{errors.job.name.message}</span>
      )}

      {name === "other" && errors.job?.other && (
        <span className="text-sm text-rose-500">
          {errors.job.other.message}
        </span>
      )}

      <Button type="button" onClick={onClickNext} className="mt-5">
        Next
      </Button>
    </main>
  );
}
