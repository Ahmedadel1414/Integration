"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [sideNavBarr, setSideNavBar] = useState(false);
  const sideNavRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const { t } = useTranslation();

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
      <ul className="flex justify-center gap-x-2 xl:gap-x-4">
        <li className={`hover:text-secondary ${pathname === "/" ? "text-secondary font-bold" : ""}`}>
          <Link href="/">{t("nav.home")}</Link>
        </li>
        <li className={`hover:text-secondary ${pathname === "/about-us" ? "text-secondary font-bold" : ""}`}>
          <Link href="/about-us">{t("nav.aboutUs")}</Link>
        </li>
        <li className={`hover:text-secondary ${pathname === "/our-services" ? "text-secondary font-bold" : ""}`}>
          <Link href="/our-services">{t("nav.services")}</Link>
        </li>
        <li className={`hover:text-secondary ${pathname === "/vision-and-goals" ? "text-secondary font-bold" : ""}`}>
          <Link href="/vision-and-goals">{t("nav.visionAndGoals")}</Link>
        </li>
        <li className={`hover:text-secondary ${pathname === "/privacy-policy" ? "text-secondary font-bold" : ""}`}>
          <Link href="/privacy-policy">{t("nav.privacyPolicy")}</Link>
        </li>
        <li className={`hover:text-secondary ${pathname === "/contact-us" ? "text-secondary font-bold" : ""}`}>
          <Link href="/contact-us">{t("nav.contactUs")}</Link>
        </li>
        <li
          ref={sideNavRef}
          onClick={() => setSideNavBar((prev) => !prev)}
          className="relative hover:text-secondary cursor-pointer flex items-center gap-1"
        >
          {t("nav.moreAboutUs")}
          <FaAngleDown
            className={`transition-transform duration-300 ${
              sideNavBarr ? "rotate-180" : "rotate-0"
            }`}
          />
        </li>
      </ul>

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
            <Link href="/workflow-steps">{t("nav.workflowSteps")}</Link>
          </li>
          <li
            className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
              pathname === "/foundations-and-principles"
                ? "text-secondary font-bold bg-gray-100"
                : ""
            }`}
          >
            <Link href="/foundations-and-principles">{t("nav.foundationsAndPrinciples")}</Link>
          </li>
          <li
            className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
              pathname === "/advantages-of-dealing-with-us"
                ? "text-secondary font-bold bg-gray-100"
                : ""
            }`}
          >
            <Link href="/advantages-of-dealing-with-us">
              {t("nav.advantagesOfDealingWithUs")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
