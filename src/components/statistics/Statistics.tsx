"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaCheckCircle,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: FaUsers,
    number: "%97",
    label: "نسبة الاحتفاظ بالعملاء",
  },  
  {
    icon: FaCheckCircle,
    number: "5+",
    label: "سنوات خبرة",
  },
  {
    icon: FaBuilding,
    number: "50+",
    label: "شركة شريكة",
  },
  {
    icon: FaShieldAlt,
    number: "95%",
    label: "نسبة رضا العملاء",
  },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            إحصائياتنا
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="text-5xl text-secondary" />
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
