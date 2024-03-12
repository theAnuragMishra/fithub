import Image from "next/image";
import FithubLogo from "@/app/ui/fithub-logo";
import { lusitana, poppins } from "@/app/ui/fonts";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-10 ">
      <div
        className={`bg-blue-500 w-full flex h-20 rounded-lg p-5 md:h-52 items-end shrink-0`}
      >
        <FithubLogo />
      </div>
      <div className="flex w-full flex-row justify-center items-center gap-3 px-24">
        <div className="w-1/3 rounded-md bg-gray-50 h-60 p-5 text-center">
          <p className={`${lusitana.className} text-xl`}>
            <strong>A fitness and mindfulness hub for everyone!</strong>
          </p>
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <Image
            src="/home-hero.jpg"
            alt="A person doing yoga"
            width={280}
            height={280}
          />
        </div>
      </div>
    </main>
  );
}
