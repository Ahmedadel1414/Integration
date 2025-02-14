import AboutUs from "@/components/about-us/AboutUs";
import Link from "next/link";

const page = () => {
  return (
    <section className="pb-10">
      <div className="relative -z-50 bg-[url(/assets/home-imgs/hero.jpg)] filter w-full bg-cover bg-fixed px-0 py-[150px]">
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-60"></div>
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
      <div className="container py-10">
        <AboutUs />
      </div>
      <div className="text-center mb-12">
        <Link
          className="inline-block bg-primary text-white px-11 py-3 rounded-md m-auto hover:bg-opacity-80"
          href="/contact-us"
        >
          اتصل بنا
        </Link>
      </div>
    </section>
  );
};

export default page;
