"use client";

import Link from "next/link";

import { navBarr } from "@/constants/navSections";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [sideNavBarr, setSideNavBar] = useState(false);
  const sideNavRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        setSideNavBar(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className="relative text-base xl:text-lg hidden lg:flex"
      aria-label="breadcrumb"
    >
      <ul className="flex justify-center gap-x-3 xl:gap-x-4">
        {navBarr.slice(0, 6).map((section, index) => (
          <li
            key={index}
            className={`hover:text-secondary ${
              pathname === `/${section.url}` ? "text-secondary font-bold" : ""
            }`}
          >
            <Link href={`/${section.url}`}>{section.section}</Link>
          </li>
        ))}
        <li
          ref={sideNavRef}
          onClick={() => setSideNavBar((priv) => !priv)}
          className="relative hover:text-secondary cursor-pointer"
        >
          المزيد عنا
          <span>
            <FaAngleDown className="absolute -left-4 bottom-1" />
          </span>
        </li>
      </ul>
      {sideNavBarr && (
        <div className="absolute top-10 -left-2 w-56 border-2 border-primary bg-white text-blue-900 text-center py-6 shadow-lg rounded-md">
          <ul className="flex flex-col gap-y-4">
            <li
              className={`hover:text-secondary hover:font-bold transition-all duration-200 ${
                pathname == `/workflow-steps` && "text-secondary font-bold"
              }`}
            >
              <Link href="/workflow-steps">خطوات سير العمل</Link>
            </li>
            <li
              className={`hover:text-secondary hover:font-bold transition-all duration-200 ${
                pathname == `/foundations-and-principles` &&
                "text-secondary font-bold"
              }`}
            >
              <Link href="/foundations-and-principles">الأسس و المبادئ</Link>
            </li>
            <li
              className={`hover:text-secondary hover:font-bold transition-all duration-200 ${
                pathname == `/advantages-of-dealing-with-us` &&
                "text-secondary font-bold"
              }`}
            >
              <Link href="/advantages-of-dealing-with-us">
                مميزات التعامل معنا
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
