import React from "react";
import "./Styling/header.css";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <Link aria-label="Site logo" className="Logo" to="/malendar/">
                <div className="Header__Logo--M">M</div>
                C
            </Link>
            <nav className="Menu">
                <NavLink
                    aria-label="Link to update feed"
                    className="Menu"
                    to="/malendar/news"
                    title="WIP"
                    activeClassName="Header--active"
                >
                    What's new
                </NavLink>
                <NavLink
                    aria-label="Link to about page"
                    className="Menu"
                    to="/malendar/about"
                    title="WIP"
                    activeClassName="Header--active"
                >
                    About
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
