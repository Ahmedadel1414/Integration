"use client";
import { useState } from "react";
import Link from "next/link";
import { navBarr } from "@/constants/navSections";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [isHidden, setIsHidden] = useState(true);
  const pathname = usePathname();

  return (
    <section className="md:hidden">
      <div
        onClick={() => {
          setIsHidden((prev) => !prev);
        }}
        className="cursor-pointer"
      >
        <span className="block bg-black w-7 h-[3px] my-1"></span>
        <span className="block bg-black w-7 h-[3px] my-1"></span>
        <span className="block bg-black w-7 h-[3px] my-1"></span>
      </div>
      <div
        id="mobile-nav"
        className="absolute top-0 left-0 w-full h-full bg-white"
        style={{
          display: isHidden ? "none" : "block",
        }}
      >
        <span
          onClick={() => {
            setIsHidden((prev) => !prev);
          }}
          className="block absolute right-14 top-5 cursor-pointer text-gray-700 text-3xl hover:text-primary"
        >
          X
        </span>
        <nav>
          <ul className="h-screen text-center content-center text-3xl">
            {navBarr.map((section, index) => (
              <li
                key={index}
                onClick={() => {
                  setIsHidden((prev) => !prev);
                }}
                className={`mx-4 pb-10 hover:text-primary ${
                  pathname == `/${section.url}` && "text-primary font-bold"
                }`}
              >
                <Link href={`/${section.url}`}>{section.section}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default MobileNav;
