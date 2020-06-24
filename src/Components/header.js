import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className='Header'>
            <div className='Logo'>MC</div>
            <div className='Menu'>
                <div className='Menu'>What's new</div>
                <div className='Menu'>About</div>
            </div>
        </header>
    )
}

export default Header;