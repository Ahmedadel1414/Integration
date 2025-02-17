import AboutUs from "@/components/about-us/AboutUs";
import Link from "next/link";
import ImagSlider from "@/components/imagSlider/ImagSlider";

const Page = () => {
  return (
    <section className="">
      <div className="relative -z-50 bg-[url(/assets/who-are-we.jpg)] filter w-full bg-cover bg-center px-0 py-[150px]">
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-40"></div>
        <div className="space-y-8">
          <h1 className="m-auto text-center text-4xl font-semibold pt-5 xs:text-5xl text-white">
            من نحن
          </h1>
          <div className="space-y-3">
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              نحن شركة متخصصة في تقديم حلول تأمينية متكاملة، مصممة خصيصًا لتلبية
              احتياجات عملائنا وفق أعلى معايير الجودة والموثوقية.
            </p>
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              نمتلك خبرة واسعة في مجال التأمين، ونعمل من خلال فريق محترف لضمان
              تقديم خدمات مبتكرة تساعد عملاءنا على تحقيق الأمان المالي
              والاستقرار.
            </p>
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              نحرص على التطوير المستمر واعتماد أحدث المعايير والتقنيات في تقديم
              خدماتنا، بهدف تحقيق رضا العملاء وتعزيز مكانتنا في السوق المصري.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <AboutUs displayHeading={false} />
      </div>

      <div className="py-2">
        <ImagSlider />
      </div>

      <div className="text-center pb-10">
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

export default Page;
