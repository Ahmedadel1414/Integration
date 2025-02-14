import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Integration",
  description: "سياسة الخصوصية لشركة Integration للوساطة المالية",
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">
          سياسة الخصوصية
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 bg-white rounded-2xl shadow-lg p-8"
          dir="rtl"
        >
          {/* جمع المعلومات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">جمع المعلومات</h2>
            <p className="text-gray-600 mb-4">
              نحن نجمع المعلومات التي تقدمها لنا عند استخدام خدماتنا، وتشمل:
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>المعلومات الشخصية (الاسم، العنوان، رقم الهاتف، البريد الإلكتروني)</li>
              <li>معلومات الشركة أو المؤسسة التي تمثلها</li>
              <li>المعلومات المتعلقة بالتأمين والمطالبات</li>
              <li>المعلومات المالية اللازمة لإتمام المعاملات</li>
            </ul>
          </section>

          {/* استخدام المعلومات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">استخدام المعلومات</h2>
            <p className="text-gray-600 mb-4">
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>تقديم خدمات الوساطة التأمينية وإدارة الوثائق</li>
              <li>التواصل معك بخصوص الخدمات والعروض والتحديثات</li>
              <li>تحسين خدماتنا وتطوير منتجات جديدة</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
            </ul>
          </section>

          {/* حماية المعلومات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">حماية المعلومات</h2>
            <p className="text-gray-600 mb-4">
              نحن نلتزم بحماية معلوماتك الشخصية من خلال:
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>استخدام تقنيات التشفير المتقدمة لحماية البيانات</li>
              <li>تقييد الوصول إلى المعلومات للموظفين المصرح لهم فقط</li>
              <li>تطبيق سياسات وإجراءات أمنية صارمة</li>
              <li>المراجعة والتحديث المستمر لإجراءات الأمان</li>
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
  );
};

export default PrivacyPolicy;
