import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center justify-around content-center bg-gray-100 p-10 lg:flex-row lg:text-right">
      <Image
        src="/assets/logos/integration.jpg"
        alt="hero"
        width={200}
        height={200}
        className="pb-5 lg:pb-0 mix-blend-multiply"
      />
      <div>
        <h3 className="pb-3">تواصل معنا</h3>
        <p className="pb-2">تليفون: 26198101 (202+) - 26198102(202+)</p>
        <p className="pb-2">موابيل: 01080631393(2+) - 01225820227(2+)</p>
        <p className="pb-2">بريد إلكتروني: director@iibeg.com</p>
      </div>
      <div>
        <h3 className="pb-3">العناوين</h3>
        <p className="pb-2">
          التجمع الخامس - المبنى الادارى - سكاي مول - القاهرة الجديدة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
