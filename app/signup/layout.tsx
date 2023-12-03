import SignUpFormProvider from "./components/signup-form-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SignUpFormProvider>{children}</SignUpFormProvider>;
}
