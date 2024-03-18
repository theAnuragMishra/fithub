import Image from "next/image";
import FithubLogo from "@/app/ui/fithub-logo";
import { lusitana, poppins } from "@/app/ui/fonts";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import VideoBackground from "@/app/ui/video-background";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <VideoBackground />
      <div className="flex w-full bg-sky-950 h-24 rounded-lg justify-center p-5  mb-4 [44px]">
        <FithubLogo />
      </div>
      <div className="flex flex-col justify-center items-center h-[60vh] ">
        <div className="flex flex-col justify-center gap-6 rounded-lg items-center w-full h-full  md:w-2/3 lg:w-1/3">
          <p className={`${lusitana.className} text-justify text-3xl `}>
            <strong>A fitness and mindfulness hub for everyone! </strong>
            Fill your life with energy with our daily guided workouts,
            mindfulness sessions, tracking calendar and{" "}
            <em>a community leaderboard to keep you going!</em>
          </p>
          <Link
            href="/api/auth/signin"
            className="flex items-center gap-5 self-start rounded-lg bg-sky-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-900 md:text-base"
          >
            <span>Get Started</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        {/* <div className="flex items-center justify-center p-6  md:px-0 md:py-0">
          <Image
            src="/home-hero.jpg"
            alt="A person doing yoga"
            width={300}
            height={300}
          />
        </div> */}
      </div>
    </main>
  );
}
