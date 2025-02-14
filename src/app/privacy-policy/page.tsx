import React from "react";
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
          إشعار حماية البيانات والخصوصية
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 bg-white rounded-2xl shadow-lg p-8"
          dir="rtl"
        >
          {/* المقدمة */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">مقدمة</h2>
            <p className="text-gray-600 leading-relaxed">
              تلتزم شركة Integration للوساطة المالية بحماية خصوصيتك وأمن بياناتك
              الشخصية. نحن ملتزمون بمعالجة بياناتك بطريقة قانونية وآمنة وشفافة،
              وفقاً لأعلى معايير الصناعة وقوانين حماية البيانات المعمول بها في
              المملكة العربية السعودية.
            </p>
          </section>

          {/* المعلومات التي نجمعها */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              المعلومات التي نجمعها
            </h2>
            <p className="text-gray-600 mb-4">
              نقوم بجمع أنواع مختلفة من البيانات الشخصية عنك، بما في ذلك:
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                <span className="font-semibold">معلومات الاتصال:</span> الاسم،
                العنوان، رقم الهاتف، البريد الإلكتروني
              </li>
              <li>
                <span className="font-semibold">معلومات الهوية:</span> رقم
                الهوية الوطنية، تاريخ الميلاد، الجنسية، تفاصيل السجل التجاري
                للشركات
              </li>
              <li>
                <span className="font-semibold">معلومات التأمين:</span> معلومات
                عن وثائق التأمين الحالية والسابقة، المطالبات، المستفيدين
              </li>
              <li>
                <span className="font-semibold">معلومات الدفع:</span> معلومات
                الدفع، بما في ذلك تفاصيل بطاقة الائتمان
              </li>
              <li>
                <span className="font-semibold">معلومات أخرى:</span> قد نجمع
                بيانات أخرى عند تفاعلك معنا، مثل المعلومات التي تقدمها عند تقديم
                طلب أو استفسار
              </li>
            </ul>
          </section>

          {/* أسباب جمع البيانات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              أسباب جمع البيانات
            </h2>
            <p className="text-gray-600 mb-4">
              نقوم بجمع بياناتك الشخصية للأغراض التالية:
            </p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                <span className="font-semibold">تقديم خدمات الوساطة:</span>{" "}
                لتقييم الطلبات، ودعم إصدار الوثائق من شركات التأمين، ومعالجة
                المطالبات
              </li>
              <li>
                <span className="font-semibold">التواصل معك:</span> للرد على
                استفساراتك، وتقديم الدعم، وإرسال الإشعارات المهمة
              </li>
              <li>
                <span className="font-semibold">التسويق:</span> لإعلامك
                بالمنتجات والخدمات الجديدة التي قد تهمك، بموافقتك المسبقة
              </li>
              <li>
                <span className="font-semibold">تحسين خدماتنا:</span> لتحليل
                البيانات لفهم احتياجات عملائنا وتحسين جودة خدماتنا
              </li>
            </ul>
          </section>

          {/* كيفية استخدام البيانات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              كيفية استخدام البيانات
            </h2>
            <p className="text-gray-600 leading-relaxed">
              نستخدم بياناتك الشخصية بطريقة تتوافق مع القوانين واللوائح المعمول
              بها. نحن نتخذ جميع التدابير اللازمة لضمان معالجة بياناتك بشكل آمن
              وسري.
            </p>
          </section>

          {/* معلومات الاتصال */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600">
                للتواصل معنا بخصوص سياسة الخصوصية:
              </p>
              <p className="text-primary font-semibold mt-2">
                <Link
                  className="underline underline-offset-2"
                  href={"mailto:director@iibeg.com"}
                >
                  director@iibeg.com
                </Link>
              </p>
              <p className="text-gray-600 mt-1">
                هاتف: 01080631393 (2+) - 01225820227 (2+)
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
