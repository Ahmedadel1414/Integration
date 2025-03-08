"use client";

import Link from "next/link";
import { navBarr } from "@/constants/navSections";
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
        className="text-2xl text-primary p-2"
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

        <ul className="p-4 space-y-4">
          {navBarr.map((section, index) => (
            <li
              key={index}
              className={`hover:text-secondary ${
                pathname === `/${section.url}` ? "text-secondary font-bold" : ""
              }`}
            >
              <Link href={`/${section.url}`} onClick={toggleMenu}>
                {t(`nav.${section.url}`)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
