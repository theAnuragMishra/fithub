"use client";

import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "home", href: "/home", icon: HomeOutlinedIcon },
  { name: "calendar", href: "/home/calendar", icon: CalendarTodayOutlinedIcon },
  {
    name: "database",
    href: "/home/database",
    icon: FitnessCenterOutlinedIcon,
  },
  { name: "mindfulness", href: "/home/mindfulness", icon: SpaOutlinedIcon },
  { name: "community", href: "/home/community", icon: Groups2OutlinedIcon },
  { name: "profile", href: "/home/profile", icon: Person4OutlinedIcon },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-1 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href, //highlihting current route
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
