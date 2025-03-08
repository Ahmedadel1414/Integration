"use client";

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "ما هي أنواع التأمين التي تقدمونها؟",
      answer: "نقدم مجموعة شاملة من منتجات التأمين بما في ذلك تأمين السيارات، المنازل، الصحة، الحياة، السفر، وتأمين الأعمال. يمكن تخصيص كل وثيقة تأمين لتلبية احتياجاتك الخاصة."
    },
    {
      question: "كيف يمكنني تقديم مطالبة؟",
      answer: "تقديم المطالبة أمر بسيط. يمكنك إما الاتصال بخط المطالبات لدينا المتاح على مدار 24/7 أو زيارتنا. سيقوم فريق المطالبات المتخصص لدينا بإرشادك خلال العملية."
    },
    {
      question: "كم من الوقت يستغرق معالجة المطالبة؟",
      answer: "يختلف وقت المعالجة حسب نوع وتعقيد المطالبة. يمكن معالجة المطالبات البسيطة خلال 24-48 ساعة، بينما قد تستغرق الحالات الأكثر تعقيدًا 5-7 أيام عمل."
    },
    {
      question: "ما هي العوامل التي تؤثر على قسط التأمين الخاص بي؟",
      answer: "هناك عدة عوامل يمكن أن تؤثر على قسط التأمين، بما في ذلك نوع التغطية، تاريخ المطالبات، عوامل المخاطر، مدة الوثيقة، ومبلغ التحمل. يمكن لوكلائنا المساعدة في شرح كيفية تأثير هذه العوامل على قسط التأمين الخاص بك."
    },
    {
      question: "هل يمكنني تعديل وثيقة التأمين بعد الشراء؟",
      answer: "نعم، يمكنك تعديل وثيقة التأمين الخاصة بك في أي وقت. اتصل بفريق خدمة العملاء لدينا لمناقشة التغييرات في التغطية، إضافة عناصر جديدة، أو تعديل حدود الوثيقة."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq" dir="rtl">
      <div className={styles.container}>
        <h2>الأسئلة الشائعة</h2>
        <p>اعثر على إجابات للأسئلة الشائعة حول خدمات التأمين لدينا</p>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
