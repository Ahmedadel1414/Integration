"use client";

import Card from "@/components/services-card/Card";

import { ourServices } from "@/constants/ourServices";
import { motion } from "motion/react";

const Cards = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-full gap-10 py-10 sm:grid-cols-[repeat(auto-fill,minmax(460px,1fr))]"
    >
      {ourServices.map((service) => (
        <motion.div
          key={service.cardTitle}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
              },
            },
          }}
        >
          <Card
            CardIcon={service.cardIcon}
            cardTitle={service.cardTitle}
            cardParagraph={service.cardParagraph}
            cardParagraph2={service.cardParagraph2}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
