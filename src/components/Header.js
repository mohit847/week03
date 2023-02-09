import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>About</Link>
      {/* <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a> */}
    </nav>
  );
};

export default Header;