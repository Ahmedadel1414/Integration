'use client';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arTranslations from "./translations/ar.json";
import enTranslations from "./translations/en.json";

// Prevent i18next from creating multiple instances during HMR
const isI18nInitialized = i18n.isInitialized;

if (!isI18nInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        ar: {
          translation: arTranslations,
        },
        en: {
          translation: enTranslations,
        },
      },
      fallbackLng: "ar",
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
