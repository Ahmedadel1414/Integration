"use client";

import Link from "next/link";
import { navBarr } from "@/constants/navSections";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      className="text-lg max-[850px]:text-base hidden md:flex"
      aria-label="breadcrumb"
    >
      <ul className="flex justify-center gap-x-4">
        {navBarr.map((section, index) => (
          <li
            key={index}
            className={`hover:text-secondary ${
              pathname == `/${section.url}` && "text-secondary font-bold"
            }`}
          >
            <Link href={`/${section.url}`}>{section.section}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
