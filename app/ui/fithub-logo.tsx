import Image from "next/image";
export default function FithubLogo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/fithub-logo.webp"
        alt="Fithub Logo"
        width={300}
        height={300}
      />
    </div>
  );
}
