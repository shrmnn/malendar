import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="Header">
            <div aria-label="Site logo" className="Logo">
                <div className="Header__Logo--M">M</div>
                C
            </div>
            <div className="Menu">
                <div aria-label="Link to update feed" className="Menu" title="WIP">
                    What's new
                </div>
                <div aria-label="Link to about page" className="Menu" title="WIP">
                    About
                </div>
            </div>
        </header>
    );
};

export default Header;
