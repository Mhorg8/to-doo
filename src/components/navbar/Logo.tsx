import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-2xl md:text-3xl font-bold font-outfit hover:scale-110 text-primary cursor-pointer transition duration-200">
      To-doo
    </Link>
  );
};

export default Logo;
