import { RiMenu5Line } from "react-icons/ri";
import { menuLinks } from "../../constants";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  click: () => void;
}
const MobileMenu = ({ click }: MobileMenuProps) => {
  return (
    <div className="w-full h-full relative">
      <button onClick={click} className="absolute top-2 right-5">
        <RiMenu5Line size={24} />
      </button>
      <ul className="mt-10 flex flex-col gap-4 items-center justify-center h-full w-full">
        {menuLinks.map((link) => (
          <Link className="nav-link" to={link.path} key={link.text}>
            {link.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
