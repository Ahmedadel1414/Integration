"use client";

import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

const Header = () => {
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
      className="bg-white"
    >
      <div className="container flex justify-between items-center max-w-full px-2 xs:px-8">
        {/* <Logo /> */}
        <Link href={"/"}>
          <Image
            className="w-full max-w-[280px] sm:max-w-full"
            src={"/assets/logos/hd-logo.jpeg"}
            alt="Integration Logo"
            width={300}
            height={100}
          />
        </Link>

        <Nav />
        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Header;
