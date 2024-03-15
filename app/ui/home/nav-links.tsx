"use client";
import SportsGymnasticsOutlinedIcon from "@mui/icons-material/SportsGymnasticsOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import {
  CalendarIcon,
  UserIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "home", href: "/home", icon: HomeModernIcon },
  { name: "calendar", href: "/home/calendar", icon: CalendarIcon },
  {
    name: "database",
    href: "/home/database",
    icon: SportsGymnasticsOutlinedIcon,
  },
  { name: "mindfulness", href: "/home/mindfulness", icon: SpaOutlinedIcon },
  { name: "community", href: "/home/community", icon: Groups2OutlinedIcon },
  { name: "profile", href: "/home/profile", icon: UserIcon },
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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3",
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
