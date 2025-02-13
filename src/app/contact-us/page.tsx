import Contact from "@/features/contact/Contact";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="relative -z-50 bg-[url(/assets/home-imgs/hero.jpg)] filter w-full bg-cover bg-fixed px-0 py-[150px]">
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-70"></div>
        <span>
          <h1 className="m-auto text-center text-4xl font-semibold pt-5 xs:text-5xl text-white">
            الرؤية و الأهداف
          </h1>
          <p className="m-auto text-center text-2xl font-medium pt-10 xs:text-3xl text-white">
            - ان رؤيتنا هي شركات ناجحة مع عملائنا علي أساس متين من قيمتنا
            المضافة, و الوصول الي حصة كبيرة من السوق المصري.
          </p>
          <p className="m-auto text-center text-2xl font-medium pt-10 xs:text-3xl text-white">
            - أهدافنا هي التزامنا نحو تقديم أفضل مستويات الخدم’ التأمينية بالسوق
            المصري.
          </p>
        </span>
      </div>
      <div className="container">
        <Contact />
      </div>
    </section>
  );
};

export default page;
