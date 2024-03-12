"use client";

import {
  CalendarIcon,
  CircleStackIcon,
  SparklesIcon,
  UserIcon,
  BugAntIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "workout", href: "/workout", icon: BugAntIcon },
  { name: "calendar", href: "/calendar", icon: CalendarIcon },
  {
    name: "database",
    href: "/database",
    icon: CircleStackIcon,
  },
  { name: "mindfulness", href: "/mindfulness", icon: SparklesIcon },
  { name: "community", href: "/community", icon: GlobeAltIcon },
  { name: "profile", href: "/profile", icon: UserIcon },
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
                "bg-sky-100 text-blue-600": pathname === link.href,
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
