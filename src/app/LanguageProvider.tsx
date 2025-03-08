"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "@/i18n/i18n";
import i18next from "i18next";

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [dir, setDir] = useState(i18next.language === "ar" ? "rtl" : "ltr");

  useEffect(() => {
    // تحديث الاتجاه عند تغيير اللغة
    const updateDirection = (lng: string) => {
      const newDir = lng === "ar" ? "rtl" : "ltr";
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
    <div dir={dir}>
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
