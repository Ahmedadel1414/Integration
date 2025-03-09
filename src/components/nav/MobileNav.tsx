"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-3xl text-primary p-2"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button
            onClick={toggleMenu}
            className="text-2xl text-primary p-2"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="p-4 space-y-4 content-center text-center h-3/4 text-2xl">
          
        <li className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}>
          <Link onClick={toggleMenu} href="/">{t("nav.home")}</Link>
        </li>
        <li className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/about-us"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}>
          <Link onClick={toggleMenu} href="/about-us">{t("nav.aboutUs")}</Link>
        </li>
        <li
         className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/our-services"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}>
          <Link onClick={toggleMenu} href="/our-services">{t("nav.services")}</Link>
        </li>
        <li
         className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/vision-and-goals"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}>
          <Link onClick={toggleMenu} href="/vision-and-goals">{t("nav.visionAndGoals")}</Link>
        </li>
        <li
         className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/privacy-policy"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}>
          <Link onClick={toggleMenu} href="/privacy-policy">{t("nav.privacyPolicy")}</Link>
        </li>
        <li
         className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/contact-us"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}>
          <Link onClick={toggleMenu} href="/contact-us">{t("nav.contactUs")}</Link>
        </li>

        <li
        
                className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/workflow-steps"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}
              >
                <Link onClick={toggleMenu} href="/workflow-steps">{t("nav.workflowSteps")}</Link>
              </li>
              <li
              
                className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/foundations-and-principles"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}
              >
                <Link onClick={toggleMenu} href="/foundations-and-principles">{t("nav.foundationsAndPrinciples")}</Link>
              </li>
              <li
              
                className={`hover:bg-blue-100 hover:text-secondary hover:font-bold py-2 rounded-md transition-all duration-200 ${
                  pathname === "/advantages-of-dealing-with-us"
                    ? "text-secondary font-bold bg-gray-100"
                    : ""
                }`}
              >
                <Link onClick={toggleMenu} href="/advantages-of-dealing-with-us">
                  {t("nav.advantagesOfDealingWithUs")}
                </Link>
              </li>

        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
