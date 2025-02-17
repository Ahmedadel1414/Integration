import { insuranceCategories } from "@/constants/insurance";
import OurServices from "@/components/OurServices/OurServices";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <div className="relative -z-50 w-full bg-cover px-0 py-[150px]">
        <div className="absolute inset-0 -z-50">
          <Image
            src="/assets/services.jpg"
            alt="Services Section Image"
            width={1600}
            height={476}
            loading="eager"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-40"></div>
        <div className="space-y-8">
          <h1 className="m-auto text-center text-4xl font-semibold pt-5 xs:text-5xl text-white">
            الخدمات التي نقدمها
          </h1>
          <div className="space-y-3">
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              نقدم حلولًا تأمينية متكاملة مصممة لتلبية احتياجات عملائنا، مع ضمان
              أعلى مستويات الجودة والموثوقية.
            </p>
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              نلتزم بتقديم خدمات مبتكرة تساعد عملاءنا على تحقيق الأمان المالي
              والاستقرار، من خلال خبرتنا العميقة وفريقنا المتخصص.
            </p>
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              نسعى دائمًا إلى تطوير خدماتنا وفقًا لأحدث المعايير، لضمان توفير
              أفضل الحلول التأمينية التي تلبي تطلعات عملائنا في السوق المصري.
            </p>
          </div>
        </div>
      </div>

      <OurServices displayHeading={false} />

      <div className="container">
        <div className="py-5 pt-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4">
              التغطيات التأمينية التى تقدمها الشركة
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] w-full gap-10 py-10 xl:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {insuranceCategories.map((insurance, index) => (
              <div
                key={index}
                className="flex flex-col bg-white border-[4px] border-solid border-primary  shadow-lg shadow-zinc-300 overflow-hidden transition-all duration-500 hover:-translate-y-5"
              >
                <Image
                  alt="Insurance Type"
                  src={insurance.insuranceSrc}
                  width={462}
                  height={462}
                  className="w-full"
                />
                <h3 className="mx-auto text-xl font-semibold py-5 text-center px-2">
                  {insurance.insuranceTitle}
                </h3>
                <p className="text-center pb-6 px-10 leading-7">
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
  );
};

export default Page;
