"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignUpFormValues,
  defaultValues,
  signUpFormSchema,
} from "./signup-form-schema";

export default function SignUpFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
const form = useForm<SignUpFormValues>({
  resolver: zodResolver(signUpFormSchema),
  defaultValues,
  mode: "all"
});

const { handleSubmit } = form;

function onSubmit(formValues: SignUpFormValues) {
  console.log(formValues);
  alert(JSON.stringify(formValues));
}

return (
  <FormProvider {...form}>
    <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
  </FormProvider>
);
}
