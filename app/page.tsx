import { Button } from "@/components/ui/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-5">
      <h1 className="text-2xl font-bold">Multi Page Form Demo</h1>

      <Button asChild>
        <Link href="/signup/job">Start</Link>
      </Button>
    </main>
  );
}
