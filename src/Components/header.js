import React from "react";
import "./Styling/header.css";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
      <header className="Header">
        <div id="HeaderContainer">
          <Link
              aria-label="Site logo / homepage button"
              className="Logo"
              to="/malendar/"
              alt="To homepage"
              title="Homepage (SPA mode)"
          >
            <div className="Header__Logo--M">M</div>
            C
          </Link>
          <nav className="Menu">
            <NavLink
                aria-label="Link to update feed"
                className="Menu"
                to="/malendar/news"
                title="News"
                activeClassName="Header--active"
                replace
            >
              What's new
            </NavLink>
            <NavLink
                aria-label="Link to about page"
                className="Menu"
                to="/malendar/about"
                title="About"
                activeClassName="Header--active"
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>
  );
};

export default Header;
