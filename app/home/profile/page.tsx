import { roboto } from "@/app/ui/fonts";
import Attributes from "@/app/ui/profile/profile-attributes";
import { fetchProfile } from "@/app/lib/data";
import Image from "next/image";
import { auth } from "@/auth";
export default async function Page() {
  const data = await fetchProfile();
  const session = await auth();
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
        {session!.user!.name}
      </div>
      <Attributes
        height={data![0].height}
        weight={data![0].weight}
        highestStreak={"1 day"}
        bmi={Number(
          (data![0].weight / Math.pow(data![0].height / 100, 2)).toFixed(2)
        )}
      />
    </div>
  );
}
