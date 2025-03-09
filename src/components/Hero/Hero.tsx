"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="h-screen xs:h-[calc(100vh-98.33px)] text-center text-white flex items-center justify-center flex-col">
      <div className="absolute -z-50 inset-0">
        <Image
          src="/assets/home.webp"
          alt="hero"
          width={1920}
          height={1080}
          className="h-screen brightness-75 object-cover"
          loading="eager"
          priority
        />
      </div>
      <div>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.75,
          }}
          className="text-4xl font-bold mb-6 max-w-[650px] mx-auto sm:text-6xl !leading-snug"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          className="text-2xl mb-6"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.1,
        }}
      >
        <Link
          className="inline-block bg-primary text-white px-11 py-3 rounded-md m-3 hover:bg-white hover:text-primary"
          href="/contact-us"
        >
          {t('hero.contactUs')}
        </Link>
        <Link
          className="inline-block bg-white text-primary px-6 py-3 rounded-md m-3 hover:bg-primary hover:text-white"
          href="/our-services"
        >
          {t('hero.exploreServices')}
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
