"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./FAQ.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import i18n from "@/i18n/i18n";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const faqs = t("faq.questions", { returnObjects: true });

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <h2 className="font-bold">{t("faq.title")}</h2>
        <p>{t("faq.subtitle")}</p>

        <div className={styles.faqList}>
          {(faqs as []).map(
            (faq: { question: string; answer: string }, index: number) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <div
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
