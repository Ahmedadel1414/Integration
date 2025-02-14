import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col items-center text-center justify-around content-center p-10 lg:flex-row lg:text-right border-t border-t-solid border-gray-200`}
    >
      <div className="flex flex-col items-center lg:items-start">
        <Link href={"/"}>
          <Image
            src="/assets/logos/integration.jpg"
            alt="hero"
            width={200}
            height={200}
            className="pb-5 lg:pb-0 mix-blend-multiply"
          />
        </Link>
        <Link
          href="/terms-and-conditions"
          className="text-primary hover:underline transition-colors mt-4 mb-6"
        >
          الشروط والأحكام
        </Link>
      </div>
      <div>
        <h3 className="pb-3">تواصل معنا</h3>
        <p className="pb-2">تليفون: 26198101 (202+) - 26198102(202+)</p>
        <p className="pb-2">موابيل: 01080631393(2+) - 01225820227(2+)</p>
        <p className="pb-2">
          بريد إلكتروني:{" "}
          <Link
            className="text-primary underline underline-offset-2"
            href={"mailto:director@iibeg.com"}
          >
            director@iibeg.com
          </Link>
        </p>
      </div>
      <div>
        <h3 className="pb-3">العنوان</h3>
        <p className="pb-2">
          التجمع الخامس - المبنى الادارى - سكاي مول - القاهرة الجديدة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
