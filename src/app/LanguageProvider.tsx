"use client";

import { useEffect } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "@/i18n/i18n";
import i18next from "i18next";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize i18next on the client side
    if (typeof window !== "undefined") {
      i18next.init();
    }
  }, []);

  return (
    <div dir={i18next.language === "ar" ? "rtl" : "ltr"}>
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
