import Image from "next/image";
import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center py-4 max-w-full">
        <Link
          href="/"
          className="text-primary text-2xl font-bold xs:text-3xl xs:font-black"
        >
          <Image
            src="/assets/logos/integration.jpg"
            alt="logo"
            width={256}
            height={85}
            className="w-[156px] md:w-[206px] lg:w-[256px] object-cover"
            loading="eager"
          />
        </Link>

        <Nav />

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
