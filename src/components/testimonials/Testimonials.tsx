"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "أحمد محمد",
    role: "عميل",
    content:
      "خدمة ممتازة وفريق عمل محترف. ساعدوني في اختيار أفضل خطة تأمين تناسب احتياجاتي.",
    image: "/assets/testimonial1.webp",
  },
  {
    name: "سارة أحمد",
    role: "عميل",
    content:
      "شركة موثوقة وخدمة عملاء متميزة. أنصح بالتعامل معهم للحصول على أفضل حلول التأمين.",
    image: "/assets/testimonial2.webp",
  },
  {
    name: "محمد علي",
    role: "عميل",
    content:
      "تجربة رائعة في التعامل مع فريق Integration. مهنية عالية وخدمة سريعة.",
    image: "/assets/testimonial3.webp",
  },
  {
    name: "خالد إبراهيم",
    role: "عميل",
    content:
      "تجربة ممتازة مع فريق الدعم! قدموا لي استشارة شاملة وساعدوني في اختيار أفضل حلول التأمين بطريقة سلسة وواضحة.",
    image: "/assets/testimonial3.webp",
  },
  {
    name: "ليلى حسن",
    role: "عميلة",
    content:
      "خدمة رائعة وفريق عمل محترف! كانوا سريعين في الاستجابة لأسئلتي وساعدوني في العثور على التأمين المناسب لي بكل سهولة.",
    image: "/assets/testimonial4.webp"
  },
  {
    name: "ياسر محمود",
    role: "عميل",
    content:
      "تعامل راقٍ وخدمة متميزة! فريق الدعم قدم لي حلولًا مرنة تناسب احتياجاتي، وكانت التجربة سلسة من البداية حتى النهاية.",
    image: "/assets/testimonial5.webp"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            آراء عملائنا
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary"
            >
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="font-bold text-xl text-primary">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 font-semibold text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
