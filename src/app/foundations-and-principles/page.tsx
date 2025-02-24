import Link from "next/link";

const FoundationsAndPrinciples = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">
          الأسس و المبادئ
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 border-[4px] border-primary shadow-lg p-8"
          dir="rtl"
        >
          {/* الابتكار */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">الابتكار</h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>نقوم بالتنفيذ بأسلوب متميز.</li>
              <li>
                نحن نتفوق في مستوي خدمة العملاء, و الأفكار المبتكرة التي تساعد
                العملاء في معالجة المخاطر, و حماية الأصول و التعافي من الخسائر.
              </li>
            </ul>
          </section>

          {/* المهنيه */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">المهنيه</h2>

            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>خبة تأمينية مهنية تستطيع الوثوق بها.</li>
              <li>
                نحن متخصصون و يمكنك الثقة بأن تتصرف بنزاهة و نحافظ علي مصالح
                عملاءنا.
              </li>
              <li>
                نحن نعلم سوق التأمين جيدا من خلال خبرة طويلة من العمل به, و نحن
                ملتزمون بتوفير أفضل الحلول التأمينية الموجودة و بالشكل المناسب
                لعملاءنا.
              </li>
            </ul>
          </section>

          {/* الشراكة */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">الشراكة</h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                نحن مستشارين التأمين الخاصين بك, نركز علي الاحتياجات و الأولويات
                الخاصة بك.
              </li>
              <li>
                نحن فريق سريع الأستجابة و نأخذ نهجا استباقيا في شراكتنا معكم.
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

export default FoundationsAndPrinciples;
