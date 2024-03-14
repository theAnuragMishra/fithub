import { roboto } from "@/app/ui/fonts";
import Attributes from "@/app/ui/profile/profile-attributes";
import { auth } from "@/auth";
import Image from "next/image";
export default async function Page() {
  const session = await auth();
  // if (session && session.user) {
  //   const pfpSrc = session.user.image;
  // } else {
  //   const pfpSrc = "/pfp.png";
  // }
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* <div className="rounded-full w-32 h-32 bg-gray-100 m-10 mb-5"> */}
      <Image
        src={session?.user?.image!}
        height={11500}
        width={11500}
        alt="profile image"
        className="rounded-full w-32 h-32 m-10 mb-5"
      />
      {/* </div> */}
      <div className={`w-full text-center ${roboto.className} text-xl`}>
        {session?.user?.name}
      </div>
      <Attributes height={10} weight={10} highestStreak={1} timeSpent={10} />
    </div>
  );
}
