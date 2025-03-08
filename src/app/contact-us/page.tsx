"use client";

import Contact from "@/components/contact/Contact";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="relative -z-50  w-full bg-cover bg-center px-0 py-[150px]">
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-40"></div>

        <div className="absolute inset-0 -z-50">
          <Image
            src="/assets/contact.webp"
            width={1600}
            height={476}
            alt="Contact Us Section Image"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="space-y-8">
          <h1 className="m-auto text-center text-3xl font-semibold pt-5 xs:text-4xl sm:text-5xl text-white">
            {t("contact.title")}
          </h1>
          <div className="space-y-3">
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              {t("contact.description1")}
            </p>
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              {t("contact.description2")}
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Page;
