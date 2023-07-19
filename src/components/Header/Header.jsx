import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="poster" width={400} />
      </Link>
    </div>
  );
};

export default Header;