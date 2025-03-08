"use client";

import AboutUs from "@/components/about-us/AboutUs";
import Link from "next/link";
import ImagSlider from "@/components/imagSlider/ImagSlider";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="relative -z-50 w-full bg-cover bg-center px-0 py-[150px]">
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-40"></div>

        <div className="absolute inset-0 -z-50">
          <Image
            src="/assets/who-are-we.webp"
            width={1600}
            height={476}
            alt="Contact Us Section Image"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="space-y-8">
          <h1 className="m-auto text-center text-4xl font-semibold pt-5 xs:text-5xl text-white">
            {t("aboutUs.title")}
          </h1>
          <div className="space-y-3">
            {(t("aboutUs.description", { returnObjects: true }) as []).map((text, index) => (
              <p
                key={index}
                className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-10">
        <AboutUs displayHeading={false} />
      </div>

      <div className="py-2">
        <ImagSlider />
      </div>

      <div className="text-center pb-10">
        <Link
          className="inline-block bg-primary text-white px-11 py-3 rounded-md m-auto hover:bg-opacity-80"
          href="/contact-us"
        >
          {t("aboutUs.contactUs")}
        </Link>
      </div>
    </section>
  );
};

export default Page;
