"use client";

import Link from "next/link";
import { navBarr } from "@/constants/navSections";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="text-xl hidden md:flex" aria-label="breadcrumb">
      <ul className="flex justify-center gap-x-4">
        {navBarr.map((section, index) => (
          <li
            key={index}
            className={`hover:text-primary ${
              pathname == `/${section.url}` && "text-primary font-bold"
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
