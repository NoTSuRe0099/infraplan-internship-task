import React from "react";
import logo from "../../logo.svg";
import navbar from "./Navbar.module.css";
const Navbar = ({ getSearchValues }) => {
    return (
        <nav className={navbar.navbar}>
            <div className={`container ${navbar.navbar_container} `}>
                <img className={navbar.logo} src={logo} alt="nav-logo" />

                <input
                    onChange={(e) => getSearchValues(e.target.value)}
                    className={navbar.search_box}
                    type="text"
                    placeholder="Search User..."
                />
            </div>
        </nav>
    );
};

export default Navbar;
