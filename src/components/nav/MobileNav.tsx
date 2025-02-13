"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navBarr } from "@/constants/navSections";

const MobileNav = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const mobileNav = document.getElementById("mobile-nav");

    const mobileNavChecker = () => {
      if (mobileNav) {
        if (isHidden) {
          mobileNav.style.transform = "translateX(100%)";
          document.body.style.overflowY = "";
          setTimeout(() => {
            mobileNav.style.display = "none";
          }, 350);
        } else {
          mobileNav.style.display = "block";
          document.body.style.overflowY = "hidden";
          setTimeout(() => {
            mobileNav.style.transform = "translateX(0)";
          }, 350);
        }
      }
    };
    mobileNavChecker();
  }, [isHidden]);

  return (
    <>
      <section>
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
        >
          <span
            onClick={() => {
              setIsHidden((prev) => !prev);
            }}
            className="block absolute right-14 top-5 cursor-pointer text-gray-700 text-3xl hover:text-primary"
          >
            X
          </span>
          <nav className="h-scree">
            <ul className="h-screen text-center content-center text-3xl">
              {navBarr.map((section, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setIsHidden((prev) => !prev);
                  }}
                  className="mx-4 pb-10 hover:text-primary"
                >
                  <Link href={`/${section.url}`}>{section.section}</Link>
                </li>
              ))}
            </ul>
          </nav>
          \
        </div>
      </section>
    </>
  );
};

export default MobileNav;
