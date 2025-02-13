import Link from "next/link";
import { navBarr } from "@/constants/navSections";

const Nav = () => {
  return (
    <>
      <nav className="text-xl">
        <ul className="flex justify-center">
          {navBarr.map((section, index) => (
            <li key={index} className="mx-4 hover:text-primary">
              <Link href={`/${section.url}`}>{section.section}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
