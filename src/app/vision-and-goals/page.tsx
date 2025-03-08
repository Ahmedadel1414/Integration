"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <section>
      <div className="relative -z-50 w-full bg-cover bg-center px-0 py-[150px]">
        <div className="absolute inset-0 -z-50">
          <Image
            src="/assets/vision-and-goals.webp"
            alt={t("visionAndGoals.heroImage")}
            width={1600}
            height={476}
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-40"></div>
        <div className="space-y-8">
          <h1 className="m-auto text-center text-3xl font-semibold pt-5 xs:text-4xl sm:text-5xl text-white">
            {t("visionAndGoals.title")}
          </h1>
          <div className="space-y-3 max-w-[85%] mx-auto">
            <p className="m-auto text-center text-xl font-medium md:text-2xl text-white">
              {t("visionAndGoals.heroDescription1")}
            </p>
            <p className="m-auto text-center text-xl font-medium md:text-2xl text-white">
              {t("visionAndGoals.heroDescription2")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4 py-12">
          <div
            className="max-w-4xl mx-auto space-y-8 border-[4px] border-primary shadow-lg p-8"
            dir={isRtl ? "rtl" : "ltr"}
          >
            {/* Vision Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">{t("visionAndGoals.visionTitle")}</h2>
              <p className="text-gray-600">{t("visionAndGoals.visionDescription")}</p>
            </section>

            {/* Goals Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">{t("visionAndGoals.goalsTitle")}</h2>
              <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <li key={index}>
                    <span className="font-semibold">
                      {t(`visionAndGoals.goals.${index}.title`)}:
                    </span>{" "}
                    {t(`visionAndGoals.goals.${index}.description`)}
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600">{t("visionAndGoals.contact.title")}</p>
                <p className="text-secondary font-semibold mt-2">
                  <Link
                    className="underline underline-offset-2"
                    href="mailto:director@iibeg.com"
                  >
                    director@iibeg.com
                  </Link>
                </p>
                <p className="text-gray-600 mt-1">{t("visionAndGoals.contact.phone")}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
