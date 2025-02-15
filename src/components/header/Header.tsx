import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";

import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center py-3 max-w-full px-4 xs:px-8">
        <Logo />
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
