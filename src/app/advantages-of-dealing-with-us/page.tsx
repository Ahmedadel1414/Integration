import Link from "next/link";

const AdvantagesOfDealingWithUs = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">
          مميزات التعامل معنا
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 border-[4px] border-primary shadow-lg p-8"
          dir="rtl"
        >
          {/* مميزاتنا */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">مميزاتنا</h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                نحن خبراء بسوق التأمين المصري و نعرف جيدا المنتجات التأمينية
                الموجودة و نقوم بتوظيف هذه الخبرة و تلك المعرفة لخدمة مصالح
                عملائنا التأمينية.
              </li>
              <li>
                نقدم الحلول التأمينية المناسبة لحالة العميل و طبيعة نشاطه وما
                يناسب احتياجاته.
              </li>
              <li>
                نوفر التغطية التأمينية بأفضل الشروط و المزايا التأمينية و بأفضل
                الأسعار الموجودة في السوق المصري و من خلال أفضل مستوى خدمة
                عملاء.
              </li>
              <li>
                نمتلك أفضل الخبرات بسوق التأمين المصري، كذلك المتابعة لما يجد
                بأسواق التأمين العالمية لتوفير أفضل الحلول التأمينية المناسبة
                لنشاط عملائنا.
              </li>
              <li>
                نقدم استشارات تأمينية مجانية لمساعدة العملاء في فهم الخيارات
                التأمينية المتاحة واتخاذ قرارات مدروسة تلبي احتياجاتهم الفعلية.
              </li>
              <li>
                ندير مطالبات التأمين بكفاءة لضمان حصول العملاء على تعويضاتهم
                بسرعة وسهولة، مع تقديم الدعم اللازم طوال عملية المطالبة.
              </li>
              <li>
                نوفر حلولًا تأمينية مخصصة تلائم احتياجات الأفراد والشركات، سواء
                في التأمين الصحي، أو تأمين الممتلكات، أو تأمين المسؤولية
                المدنية.
              </li>
              <li>
                نتعاون مع كبرى شركات التأمين لضمان تقديم تغطيات شاملة ومتنوعة
                تلبي مختلف متطلبات العملاء بأسعار تنافسية.
              </li>
              <li>
                نواكب أحدث التطورات في سوق التأمين المصري والعالمي لنقدم
                لعملائنا أحدث الحلول التأمينية وأكثرها فاعلية.
              </li>
            </ul>
          </section>

          {/* معلومات الاتصال */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600">للتواصل معنا:</p>
              <p className="text-secondary font-semibold mt-2">
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
  );
};

export default AdvantagesOfDealingWithUs;
