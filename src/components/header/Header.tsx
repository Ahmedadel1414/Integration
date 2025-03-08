"use client";

import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import i18next from "i18next";

const Header = () => {

  const [dir, setDir] = useState(i18next.language);

  useEffect(() => {
    // تحديث الاتجاه عند تغيير اللغة
    const updateDirection = (lng: string) => {
      const newDir = lng ;
      setDir(newDir);
      document.documentElement.lang = lng;
      document.documentElement.dir = newDir;
    };

    // تحقق من اللغة المحفوظة في LocalStorage
    const savedLanguage = localStorage.getItem("lang") || i18next.language || "ar";
    updateDirection(savedLanguage);

    // مراقبة تغييرات اللغة في i18next
    i18next.on("languageChanged", updateDirection);

    // تنظيف الحدث عند إلغاء تحميل المكون
    return () => {
      i18next.off("languageChanged", updateDirection);
    };
  }, []);

  return (
    <motion.header
      initial={{
        y: -120,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
      dir="rtl"
      className="bg-white"
    >
        {dir === "ar" ? (
        <header className="container flex justify-between items-center max-w-full px-2 xs:px-8">
        <Link href={"/"}>
          <Image
            className="w-full max-w-[280px] sm:max-w-full"
            src={"/assets/logos/hd-logo.jpeg"}
            alt="Integration Logo"
            width={300}
            height={100}
            loading="lazy"
            fetchPriority="high"
          />
        </Link>
        <Nav />
        <MobileNav />
        </header>
        ):(
        <header className="container flex justify-between items-center max-w-full px-2 xs:px-8">
        <Nav />
        <MobileNav />

        <Link href={"/"}>
          <Image
            className="w-[320px] sm:max-w-full"
            src={"/assets/logos/hd-logo.jpeg"}
            alt="Integration Logo"
            width={300}
            height={100}
            loading="lazy"
            fetchPriority="high"
          />
        </Link>
        </header>
        )}
    </motion.header>
  );
};

export default Header;


