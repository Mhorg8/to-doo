import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import UserAction from "./UserAction";
import { RiMenu3Line } from "react-icons/ri";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  return (
    <div className="container py-3 flex items-center justify-between relative">
      <Logo />
      <div className="hidden md:block">
        <Menu />
      </div>

      <div className="flex items-center gap-x-2">
        <UserAction />
        <button onClick={() => setIsMenuVisible(true)} className="md:hidden">
          <RiMenu3Line size={20} />
        </button>
      </div>

      {isMenuVisible && (
        <div className="block md:hidden absolute top-0 right-0 w-[85%] h-[calc(100dvh-1dvh)] bg-background">
          <MobileMenu click={() => setIsMenuVisible(false)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
