import Image from "next/image";
import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <div className="container flex justify-between items-center py-4">
          <span className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-primary text-2xl font-bold xs:text-3xl xs:font-black"
            >
              INTEGRATION
              <Image
                src="/assets/logos/logo.PNG"
                alt="logo"
                width={60}
                height={60}
                className="inline-block w-12 h-12 mx-3 xm:w-14 xm:h-14 mix-blend-multiply"
                loading="eager"
              />
            </Link>
          </span>
          <Nav />
          <MobileNav />
        </div>
      </header>
    </>
  );
};

export default Header;
