import Link from "next/link";

const WorkFlowSteps = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-primary">
          خطوات و اجراءات سير العمل
        </h1>

        <div
          className="max-w-4xl mx-auto space-y-8 border-[4px] border-primary shadow-lg p-8"
          dir="rtl"
        >
          {/* التعيين (التفويض) و جمع المعلومات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              التعيين (التفويض) و جمع المعلومات
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                يتم تعيينا (تفويضنا) من قبل العميل كوسيط التأمين الممثل له أمام
                شركات التأمين.
              </li>
              <li>
                جمع المعلومات عن موضوع التأمين و دراستها لتقديم توصيات بالتغطية
                التأمينية المناسبة.
              </li>
            </ul>
          </section>

          {/* مخاطبة شركات التأمين واصدار عروض الأسعار */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              مخاطبة شركات التأمين واصدار عروض الأسعار
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                نقوم بمخاطبة شركات التأمين لتقديم عروض أسعار التأمين, و نقوم
                بدراسة العروض المقدمة و تقديم دراسة مقارنة لها مع التوصيات بأفضل
                العروض من حيث الشروط و التكلفة.
              </li>
            </ul>
          </section>

          {/* دور وسيط التأمين في تقديم الحلول التأمينية */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              دور وسيط التأمين في تقديم الحلول التأمينية
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                يعد وسيط التأمين حلقة الوصل بين العملاء وشركات التأمين، حيث يتم
                تعيينه (تفويضه) من قبل العميل لتمثيله والتفاوض نيابة عنه للحصول
                على أفضل التغطيات التأمينية الممكنة.
              </li>
            </ul>
          </section>

          {/* جمع وتحليل المعلومات */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              جمع وتحليل المعلومات
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                يبدأ وسيط التأمين بجمع المعلومات اللازمة حول موضوع التأمين،
                ودراستها بعناية لتحديد الاحتياجات الفعلية للعميل. يساعد هذا
                التحليل في تقديم توصيات دقيقة للتغطية التأمينية المناسبة التي
                تلبي متطلبات العميل وتحميه من المخاطر المحتملة.
              </li>
            </ul>
          </section>

          {/* التفاوض مع شركات التأمين */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              التفاوض مع شركات التأمين
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                يقوم الوسيط بالتواصل مع شركات التأمين المختلفة لطلب عروض
                الأسعار، ومن ثم يقوم بتحليل العروض المقدمة. يتم إجراء دراسة
                مقارنة تشمل شروط التغطية، والاستثناءات، والتكاليف، لضمان تقديم
                أفضل خيار متاح للعميل.
              </li>
            </ul>
          </section>

          {/* تقديم التوصيات النهائية */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              تقديم التوصيات النهائية
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside pr-4">
              <li>
                بناءً على الدراسة المقارنة، يقدم الوسيط للعميل تقريرًا مفصلاً
                يتضمن التوصيات بأفضل العروض المتاحة من حيث الشروط والتكلفة، مما
                يساعد العميل على اتخاذ القرار المناسب وفقًا لاحتياجاته ومتطلباته
                المالية.
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

export default WorkFlowSteps;
