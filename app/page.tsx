import Image from "next/image";
import FithubLogo from "@/app/ui/fithub-logo";
import { lusitana, poppins } from "@/app/ui/fonts";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <div className="flex w-full bg-sky-950 h-24 rounded-lg justify-center p-10 md:p-5  mb-10">
        <FithubLogo />
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg pl-6 py-10 md:w-2/5 md:pl-10 md:ml-20">
          <p className={`${lusitana.className} text-xl md:text-3xl`}>
            <strong>A fitness and mindfulness hub for everyone!</strong>
            Fill your life with energy with our daily guided workouts,
            mindfulness sessions, tracking calendar and{" "}
            <em>a community leaderboard to keep you going!</em>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Get Started</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6  md:px-0 md:py-0">
          <Image
            src="/home-hero.jpg"
            alt="A person doing yoga"
            width={300}
            height={300}
          />
        </div>
      </div>
    </main>
  );
}
