"use client";

import Link from "next/link";
import { navBarr } from "@/constants/navSections";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="text-xl hidden md:flex">
      <ul className="flex justify-center">
        {navBarr.map((section, index) => (
          <li
            key={index}
            className={`mx-4 hover:text-primary ${
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
