import Contact from "@/components/contact/Contact";
import Image from "next/image";

const Page = () => {
  return (
    <section>
      <div className="relative -z-50  w-full bg-cover bg-center px-0 py-[150px]">
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-60"></div>

        <div className="absolute inset-0 -z-50">
          <Image
            src="/assets/contact.webp"
            width={1600}
            height={476}
            alt="Contact Us Section Image"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="space-y-8">
          <h1 className="m-auto text-center text-3xl font-semibold pt-5 xs:text-4xl sm:text-5xl text-white">
            التواصل والدعم
          </h1>
          <div className="space-y-3">
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              يتم تعيين مسئول للتعامل مع طلبات العميل اليوميه من
              (تعديل-اضافة-الغاء) او اي طلبات اخري.
            </p>
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              نقوم بمتابعة التجديدات و توفير عروض جديدو عند التجديد لايجاد بدائل
              دائمه للعملاء.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Page;
