"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">
          {t("privacyPolicy.title")}
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 border-[4px] border-primary shadow-lg p-8"
          dir={isRtl ? "rtl" : "ltr"}
        >
          {/* Information Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("privacyPolicy.collection.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.collection.description")}
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(
                t("privacyPolicy.collection.items", {
                  returnObjects: true,
                }) as []
              ).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Information Usage */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("privacyPolicy.usage.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.usage.description")}
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(
                t("privacyPolicy.usage.items", { returnObjects: true }) as []
              ).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Information Protection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("privacyPolicy.protection.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("privacyPolicy.protection.description")}
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              {(
                t("privacyPolicy.protection.items", {
                  returnObjects: true,
                }) as []
              ).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600">
                {t("privacyPolicy.contact.title")}
              </p>
              <p className="text-secondary font-semibold mt-2">
                <Link
                  className="underline underline-offset-2"
                  href="mailto:director@iibeg.com"
                >
                  director@iibeg.com
                </Link>
              </p>
              <p className="text-gray-600 mt-1">
                {t("privacyPolicy.contact.phone")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
