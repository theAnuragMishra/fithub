import Image from "next/image";
import { lusitana, poppins } from "@/app/ui/fonts";

export default function FithubLogo() {
  return (
    <div className="flex flex-row items-center justify-center leading-none w-full text-white ">
      <Image
        className="rounded-full mr-3 invert pb-1 h-10 md:h-16"
        src="/logo.svg"
        alt="Fithub Logo"
        width={60}
        height={60}
      />
      <p className={`${poppins.className}`}>FitHub</p>
    </div>
  );
}
