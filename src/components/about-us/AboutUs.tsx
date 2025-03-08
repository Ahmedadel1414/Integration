"use client";

import Image from "next/image";

import { introduction1, introduction2 } from "@/constants/aboutUs";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

type AboutUsProps = {
  displayHeading?: boolean;
};

const AboutUs = ({ displayHeading = true }: AboutUsProps) => {
  const { i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 container">
      {displayHeading && (
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      )}

      {/* About Cards Container */}
      <div className="space-y-8">
        {/* About Card 1 */}
        <motion.div
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1 p-8">
              <div className="h-full flex flex-col justify-center space-y-4">
                {(i18n.language == "ar"
                  ? introduction1.ar
                  : introduction1.en
                ).map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 h-[300px] lg:h-auto relative">
              <Image
                src="/assets/about-us-1.webp"
                alt="Insurance brokerage services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* About Card 2 */}
        <motion.div
          initial={{
            x: "100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[300px] lg:h-auto relative">
              <Image
                src="/assets/about-us-2.webp"
                alt="Insurance consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="h-full flex flex-col justify-center space-y-4">
                {(i18n.language == "ar"
                  ? introduction2.ar
                  : introduction2.en
                ).map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
