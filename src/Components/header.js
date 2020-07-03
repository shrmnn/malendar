import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="Header">
            <div aria-label="Site logo" className="Logo">
                MC
            </div>
            <div className="Menu">
                <div aria-label="Link to update feed" className="Menu">
                    What's new
                </div>
                <div aria-label="Link to about page" className="Menu">
                    About
                </div>
            </div>
        </header>
    );
};

export default Header;
