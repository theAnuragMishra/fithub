import Image from "next/image";
import FithubLogo from "@/app/ui/fithub-logo";
import { lusitana } from "@/app/ui/fonts";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-6xl font-bold">
        <FithubLogo />
      </div>
    </main>
  );
}
