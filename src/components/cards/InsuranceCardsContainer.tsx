import Image from "next/image";

import { motion } from "motion/react";

type Insurances = {
  insuranceSrc: string;
  insuranceTitle: string;
  insuranceDescription: string;
};

const InsuranceCardsContainer = ({
  insuranceSrc,
  insuranceTitle,
  insuranceDescription,
}: Insurances) => {
  return (
    <motion.div
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
      className="flex flex-col border-[4px] border-solid border-primary shadow-lg shadow-zinc-300 overflow-hidden bg-white duration-500 transition-none"
    >
      <Image
        alt="Insurance Type"
        src={insuranceSrc}
        width={500}
        height={500}
        className="aspect-[1.3]"
        loading="lazy"
      />

      <h3 className="mx-auto text-xl font-semibold py-5">{insuranceTitle}</h3>
      <p className="text-center pb-12 px-10">{insuranceDescription}</p>
    </motion.div>
  );
};

export default InsuranceCardsContainer;
