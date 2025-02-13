import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="h-screen">
        <div className="absolute -z-50 inset-0">
          <Image
            src="/assets/home-imgs/hero.jpg"
            alt="hero"
            width={1920}
            height={1080}
            className="h-screen filter brightness-50 bg-cover"
          />
        </div>
        <div className="container flex flex-col justify-center items-center h-full text-center text-white">
          <div>
            <h1 className="text-4xl font-bold mb-6 sm:text-6xl leading-10">
              حلول تأمينية موثوقة
              <br />
              لحماية مستقبلك
            </h1>

            <p className="text-2xl mb-6">
              نقدم خدمات وساطة تأمينية احترافية تلبي احتياجاتك و تحمي مصالحك
            </p>
          </div>
          <div>
            <Link
              className="inline-block bg-primary text-white px-11 py-3 rounded-md m-3 hover:bg-white hover:text-primary"
              href="/contact-us"
            >
              تواصل معنا
            </Link>
            <Link
              className="inline-block bg-white text-primary px-6 py-3 rounded-md m-3 hover:bg-primary hover:text-white"
              href="/our-services"
            >
              استكشف خدماتنا
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
