import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="flex content-center text-center">
          <div className="ml-3">
            <h3 className="text-[#104797] text-3xl font-bold lg:text-4xl font-cen_mt italic tracking-wide">
              Integration
            </h3>
            <p className="text-gray-500 text-xs lg:text-xs font-cen_mt tracking-widest">
              Insurance Brokerage (S.A.E)
            </p>
            <p className="text-gray-500 text-sm font-cen_mt tracking-widest">
              انتجريشن لوساطة التأمين (ش.م.م)
            </p>
          </div>
          <div className="relative flex flex-col items-center before:content-[''] before:bg-gray-400 before:w-[1px] before:h-[90%] before:absolute before:-right-1 before:top-1/2 before:-translate-y-1/2 z-50">
            <Image
              src="/assets/logos/logo.webp"
              alt="logo"
              width={256}
              height={256}
              className="w-[40px] mr-1.5 object-cover my-auto relative xs:w-[55px] lg:w-[60px] mix-blend-multiply"
              loading="eager"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
