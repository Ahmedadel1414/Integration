import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center max-w-full px-2 xs:px-8">
        {/* <Logo /> */}
        <Link href={"/"}>
          <Image className="w-full max-w-[280px] sm:max-w-full" src={"/assets/logos/hd-logo.jpeg"} alt="Integration Logo" width={300} height={100} />
        </Link>

        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
