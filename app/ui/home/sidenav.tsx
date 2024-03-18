import Link from "next/link";
import NavLinks from "@/app/ui/home/nav-links";
import FithubLogo from "@/app/ui/fithub-logo";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-5 flex h-20 items-center justify-center rounded-md bg-sky-950 p-4 md:h-30"
        href="/"
      >
        <div className="w-32 text-white md:w-60 text-[32px]">
          <FithubLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3">
            <ExitToAppOutlinedIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
