import Link from "next/link";
import { FaShield } from "react-icons/fa6";
import Cards from "../cards/Cards";

const About = () => {
  return (
    <>
      <h1 className="m-auto text-center text-5xl font-semibold pt-5">
        خدماتنا
      </h1>
      <div>
        <Cards />
        <div>
          <h2 className="m-auto text-center text-3xl sm:text-5xl font-semibold py-5 leading-normal">
            أنواع التأمين بالسوق المصري
          </h2>
          <div className="text-center bg-white border border-gray-200 p-10 rounded-lg shadow-lg shadow-zinc-300 my-12">
            <div className="text-5xl text-center text-primary pb-10">
              <FaShield className="m-auto" />
            </div>
            <div className="flex flex-col items-center justify-around lg:flex-row lg:text-start">
              <span className="inline-block text-lg font-medium lg:text-xl">
                <p className="pb-3">- تأمين الممتلكات و المسئوليات.</p>
                <p className="pb-3">- تأمين الحوادث المتنوعة.</p>
                <p className="pb-3">- التأمين الهندسي.</p>
                <p className="pb-3">- تأمين النقل البحري / الجوي / البري.</p>
                <p className="pb-3">- تأمين أجسام السفن.</p>
                <p className="pb-3">- تأمين السيارات.</p>
              </span>
              <span className="inline-block text-lg font-medium lg:text-xl">
                <p className="pb-3">- تأمين مخاطر الائتمان.</p>
                <p className="pb-3">- الأخطار الخاص.</p>
                <p className="pb-3">
                  - تأمينات الأفراد / الشركات (حياة - طبي - معاش - تعليم)
                </p>
                <p className="pb-3">- تأمين حماية المنزل.</p>
                <p className="pb-3">- تأمين بترول.</p>
                <p className="pb-3">- تأمين العنف السياسي و الارهاب.</p>
                <p className="pb-3">- امكانية التأمين داخل و خارج مصر.</p>
              </span>
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
      </div>
    </>
  );
};

export default About;
