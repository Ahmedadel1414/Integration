"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n";

const AdvantagesOfDealingWithUs = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">
          {t("advantages.title")}
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 border-[4px] border-primary shadow-lg p-8"
          dir={isRtl ? "rtl" : "ltr"}
        >
          {/* Our Advantages */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("advantages.section.title")}
            </h2>
            <ul className={`space-y-3 text-gray-600 list-disc list-inside ${isRtl ? "pr-4" : "pl-4"}`}>
              {(
                t("advantages.section.items", {
                  returnObjects: true,
                }) as string[]
              )?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600">{t("contact.title")}</p>
              <p className="text-secondary font-semibold mt-2">
                <Link
                  className="underline underline-offset-2"
                  href="mailto:director@iibeg.com"
                >
                  director@iibeg.com
                </Link>
              </p>
              <p className="text-gray-600 mt-1">{t("contact.phone")}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesOfDealingWithUs;
