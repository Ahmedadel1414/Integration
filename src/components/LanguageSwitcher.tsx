"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-10 right-10 flex items-center gap-x-2 px-4 py-2 bg-secondary text-white rounded"
    >
      {i18n.language === "ar" ? "English" : "العربية"}

    </button>
  );
};

export default LanguageSwitcher;
