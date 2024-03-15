import Image from "next/image";

export default function HomeBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image
        src="/bg.jpg"
        className="object-cover"
        height={900}
        width={1600}
        alt="running background"
      />
    </div>
  );
}
