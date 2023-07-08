import React from "react";
import "./Header.css";
import img from "./logo.png";

import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div className="Header">
        <Link to="/">
            <img src={img} alt="logo" width="300" />
        </Link>
    </div>
    );
};

export default Header;