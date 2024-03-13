import { roboto } from "@/app/ui/fonts";
import Attributes from "@/app/ui/profile/profile-attributes";
export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="rounded-full w-32 h-32 bg-gray-100 m-10 mb-5"></div>
      <div className={`w-full text-center ${roboto.className} text-xl`}>
        Name
      </div>
      <Attributes />
    </div>
  );
}
