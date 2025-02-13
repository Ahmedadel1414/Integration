import { introduction1, introduction2 } from "@/constants/aboutUs";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h2 className="m-auto text-center text-5xl font-semibold pb-5">من نحن</h2>
      <div className="flex flex-col items-center mt-10 gap-10 pb-10">
        <div className="flex flex-col gap-10 bg-gray-500 rounded-xl lg:flex-row">
          <Image
            src="/assets/home-imgs/hero.jpg"
            alt="hero"
            width={550}
            height={550}
            className="border rounded-xl min-w-full max-h-[550px] lg:min-w-[550px]"
          />
          <span className="flex flex-col justify-center">
            {introduction1.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm text-white py-5 px-3 xs:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </span>
        </div>
        <div className="flex flex-col gap-10 bg-gray-500 rounded-xl lg:flex-row">
          <span className="flex flex-col justify-center">
            {introduction2.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm text-white py-5 px-3 xs:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </span>
          <Image
            src="/assets/home-imgs/hero.jpg"
            alt="hero"
            width={550}
            height={550}
            className="border rounded-xl min-w-full max-h-[550px] lg:min-w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
