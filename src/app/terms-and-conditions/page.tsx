import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Integration",
  description: "الشروط والأحكام لشركة Integration للوساطة المالية",
};

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">
          الشروط والأحكام
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 border-[4px] border-primary shadow-lg p-8"
          dir="rtl"
        >
          {/* التزاماتنا */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">إلتزاماتنا</h2>
            <p className="text-gray-600 mb-4">
              تم تحديدها من خلال القانون واللوائح التنفيذية والقرارات التنظيمية
              الصادرة عن الهيئة العامة للرقابة المالية ومنها على سبيل المثال:
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                قرار مجلس إدارة الهيئة العامة للرقابة المالية رقم ٢٣ بتاريخ ٩
                فبراير ٢٠١٤ بشأن القواعد الحاكمة لممارسة نشاط وساطة التأمين داخل
                جمهورية مصر العربية وما صدر عليه من تعديلاته.
              </li>
              <li>قانون التأمين الموحد رقم (١٥٥) لسنة ٢٠٢٤</li>
            </ul>
            <p className="text-gray-600 mt-4">
              بالإضافة إلى ما أقرته الهيئة العامة للرقابة المالية من إلتزامات
              على شركات الوساطة فإننا نتميز بأن نقدم إلى عملاؤنا اتفاقيات تنظم
              وتوضح وتشرح تفاصيل التعامل بما يضمن علاقة مستقرة ومستمرة لمدى طويل
              وهي:
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>اتفاقية مستوى الخدمة (Service Level Agreement (SLA</li>
              <li>اتفاقية شروط العمل (Terms of business (TOB</li>
              <li>عقد اتفاق (Contract Agreement (CA</li>
            </ul>
          </section>

          {/* إلتزامات عملائنا */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              إلتزامات عملائنا
            </h2>
            <p className="text-gray-600 mb-4">
              لا توجد على عملائنا أي التزامات أدبية أو مالية بخلاف ما يلي:
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>تقديم البيانات الصحيحة عند طلب إصدار أو تجديد أي وثيقة.</li>
              <li>موافاتنا بأي مستندات نحتاجها تدعم إدارة الملف التأميني.</li>
              <li>الإجابة على أي استفسارات نطلبها.</li>
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

export default TermsAndConditions;
