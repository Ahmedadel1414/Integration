import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8 bg-white rounded-2xl shadow-lg p-12 text-center">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          
          <div className="space-y-4" dir="rtl">
            <h2 className="text-3xl font-bold text-gray-800">
              عذراً، الصفحة غير موجودة
            </h2>
            <p className="text-gray-600 text-lg">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            </p>
          </div>

          <Link 
            href="/" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors mt-6"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
