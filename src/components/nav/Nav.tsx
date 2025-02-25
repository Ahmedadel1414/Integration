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
          onClick={() => setSideNavBar((prev) => !prev)}
          className="relative hover:text-secondary cursor-pointer flex items-center gap-1"
        >
          المزيد عنا
          <FaAngleDown
            className={`transition-transform duration-300 ${
              sideNavBarr ? "rotate-180" : "rotate-0"
            }`}
          />
        </li>
      </ul>

      {/* القائمة الجانبية المحسّنة */}
      <div
        className={`absolute top-12 -left-4 w-60 border border-gray-300 bg-white text-blue-900 text-center shadow-xl rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform ${
          sideNavBarr
            ? "opacity-100 scale-100 py-4"
            : "opacity-0 scale-95 py-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-y-3 px-4">
          <li
            className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
              pathname === "/workflow-steps"
                ? "text-secondary font-bold bg-gray-100"
                : ""
            }`}
          >
            <Link href="/workflow-steps">خطوات سير العمل</Link>
          </li>
          <li
            className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
              pathname === "/foundations-and-principles"
                ? "text-secondary font-bold bg-gray-100"
                : ""
            }`}
          >
            <Link href="/foundations-and-principles">الأسس و المبادئ</Link>
          </li>
          <li
            className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
              pathname === "/advantages-of-dealing-with-us"
                ? "text-secondary font-bold bg-gray-100"
                : ""
            }`}
          >
            <Link href="/advantages-of-dealing-with-us">
              مميزات التعامل معنا
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
