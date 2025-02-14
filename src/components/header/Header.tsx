import Image from "next/image";
import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center py-4">
        <span className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-primary text-2xl font-bold xs:text-3xl xs:font-black"
          >
            <Image
              src="/assets/logos/integration.jpg"
              alt="logo"
              width={256}
              height={85}
              className="w-[135px] h-[50px] xs:w-[256px] xs:h-[85px]"
              loading="eager"
            />
          </Link>
        </span>

        <Nav />

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
