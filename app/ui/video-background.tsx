import Image from "next/image";
export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 ">
      <video
        autoPlay
        loop
        muted
        className="opacity-20 object-cover hidden md:block"
      >
        <source src="/vbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        src="/bg.jpg"
        alt="background image"
        height={900}
        width={1300}
        className="opacity-30 object-cover block md:hidden h-[100vh]"
      />
    </div>
  );
}
