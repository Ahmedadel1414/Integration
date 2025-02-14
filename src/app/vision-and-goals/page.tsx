import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <div className="relative -z-50  w-full bg-cover bg-center px-0 py-[150px]">
        <div className="absolute inset-0 -z-50">
          <Image
            src="/assets/vision-and-goals.jpg"
            alt="Services Section Vision and goals"
            width={1600}
            height={476}
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="bg-black w-full h-full top-0 left-0 absolute -z-40 opacity-70"></div>
        <div className="space-y-8">
          <h1 className="m-auto text-center text-3xl font-semibold pt-5 xs:text-4xl sm:text-5xl text-white">
            الرؤية و الأهداف
          </h1>
          <div className="space-y-3">
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              ان رؤيتنا هي شركات ناجحة مع عملائنا علي أساس متين من قيمتنا
              المضافة, و الوصول الي حصة كبيرة من السوق المصري.
            </p>
            <p className="m-auto text-center text-base font-medium sm:text-xl md:text-2xl text-white">
              أهدافنا هي التزامنا نحو تقديم أفضل مستويات الخدم’ التأمينية بالسوق
              المصري.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-16 text-primary">
            الرؤية و الأهداف
          </h1>

          <div
            className="max-w-4xl mx-auto space-y-8 bg-white rounded-2xl shadow-lg p-8"
            dir="rtl"
          >
            {/* الرؤية */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">رؤيتنا</h2>
              <p className="text-gray-600">
                نطمح إلى أن نكون الشريك التأميني الأول في السوق المصري من خلال
                تقديم حلول تأمينية مبتكرة وشاملة، مبنية على قيمتنا المضافة، مما
                يتيح لعملائنا تحقيق الأمان المالي والاستقرار. نسعى للوصول إلى
                حصة سوقية كبيرة عبر تقديم خدمات متميزة تتماشى مع تطورات السوق
                واحتياجات العملاء.
              </p>
            </section>

            {/* الأهداف */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">أهدافنا</h2>
              <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
                <li>
                  <span className="font-semibold">
                    تقديم خدمات تأمينية متكاملة:
                  </span>{" "}
                  تلبي احتياجات عملائنا وفقًا لأعلى معايير الجودة والموثوقية.
                </li>
                <li>
                  <span className="font-semibold">تعزيز تجربة العملاء:</span> من
                  خلال فريق محترف ومتخصص يوفر استشارات تأمينية متميزة ودعمًا
                  متواصلًا على مدار الساعة.
                </li>
                <li>
                  <span className="font-semibold">تطوير الحلول التأمينية:</span>{" "}
                  عبر دراسة دقيقة للمخاطر، وتحليل الأصول، وتقديم أفضل التوصيات
                  لضمان تغطية تأمينية مناسبة وعادلة.
                </li>
                <li>
                  <span className="font-semibold">
                    تحسين كفاءة إدارة التأمين والتعويضات:
                  </span>{" "}
                  من خلال متابعة كاملة مع شركات التأمين، بدءًا من طلب العروض
                  وحتى تسوية المطالبات بشكل فعال.
                </li>
                <li>
                  <span className="font-semibold">
                    الابتكار والتطوير المستمر:
                  </span>{" "}
                  عبر اعتماد أحدث المعايير والتقنيات لضمان تقديم حلول تأمينية
                  حديثة تلبي متطلبات السوق المتغيرة.
                </li>
                <li>
                  <span className="font-semibold">
                    بناء علاقات قوية مع الشركات التأمينية:
                  </span>{" "}
                  لضمان توفير أفضل العروض والحلول لعملائنا، مما يعزز من مكانتنا
                  كشركة رائدة في المجال.
                </li>
              </ul>
            </section>

            {/* معلومات الاتصال */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600">للتواصل معنا:</p>
                <p className="text-primary font-semibold mt-2">
                  <Link
                    className="underline underline-offset-2"
                    href={"mailto:director@iibeg.com"}
                  >
                    director@iibeg.com
                  </Link>
                </p>
                <p className="text-gray-600 mt-1">
                  هاتف: 01080631393 (20+) - 01225820227 (20+)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
