import Cards from "@/components/cards/Cards";
import { insuranceCategories } from "@/constants/insurance";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section>
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
              - أهدافنا هي التزامنا نحو تقديم أفضل مستويات الخدم’ التأمينية
              بالسوق المصري.
            </p>
          </span>
        </div>
        <div className="container">
          <div className="py-5">
            <h2 className="m-auto text-center text-5xl font-semibold py-5">
              خدماتنا
            </h2>
            <Cards />
          </div>
          <div className="py-5">
            <h2 className="m-auto text-center text-3xl sm:text-5xl font-semibold py-5 leading-normal">
              أنواع التأمين بالسوق المصري
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-full gap-10 py-10 sm:grid-cols-[repeat(auto-fill,minmax(460px,1fr))]">
              {insuranceCategories.map((insurance, index) => (
                <div
                  key={index}
                  className="flex flex-col border border-solid border-gray-200 shadow-lg shadow-zinc-300 rounded-lg overflow-hidden"
                >
                  <Image
                    alt="Insurance Type"
                    src={insurance.insuranceSrc}
                    width={500}
                    height={500}
                    className="min-w-full"
                  />
                  <h3 className="mx-auto text-xl font-semibold py-5 text-center px-2">
                    {insurance.insuranceTitle}
                  </h3>
                  <p className="text-center pb-12 px-10 leading-7">
                    {insurance.insuranceDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mb-12">
            <Link
              className="inline-block bg-primary text-white px-11 py-3 rounded-md m-auto hover:bg-opacity-80"
              href="/contact-us"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
