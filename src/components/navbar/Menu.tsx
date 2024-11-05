import { Link } from "react-router-dom";
import { menuLinks } from "../../constants";

const Menu = () => {
  return (
    <ul className="flex items-center gap-x-4 ">
      {menuLinks.map((link) => (
        <Link className="nav-link" to={link.path} key={link.text}>
          {link.text}
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
