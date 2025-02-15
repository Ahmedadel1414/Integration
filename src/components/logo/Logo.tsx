import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="flex text-center content-center">
          <div>
            <h3 className="ml-3 text-primary text-lg font-bold xs:text-md lg:text-2xl xs:font-black">
              INTEGRATION
            </h3>
            <p className="ml-3 text-gray-700 text-xs font-light lg:text-sm">
              Insurance Brokerage (S.A.E)
            </p>
            <p className="ml-3 text-gray-700 text-xs font-light lg:text-xs">
              انتجريشن لوساطة التأمين (ش.م.م)
            </p>
          </div>
          <div className="relative flex flex-col items-center before:content-[''] before:bg-gray-400 before:w-[1px] before:h-[90%] before:absolute before:-right-1 before:top-1/2 before:-translate-y-1/2 z-50">
            <Image
              src="/assets/logos/logo.PNG"
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
