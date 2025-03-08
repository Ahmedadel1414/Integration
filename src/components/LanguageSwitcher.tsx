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
      <Image
        src={
          i18n.language === "en"
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png"
            : "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
        }
        alt="UAE Flag"
        width={40}
        height={40}
        className=""
      />
    </button>
  );
};

export default LanguageSwitcher;
