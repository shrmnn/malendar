import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='footerRight'>Alex Shermann [2020]</div>
            <div className='footerLeft'>
                <a href='https://github.com/shrmnn/malendar'
                   target="_blank"
                   rel="noopener noreferrer">
                    <img alt='github link'
                         aria-label='github link'
                         height="32"
                         width="32"
                         src="https://unpkg.com/simple-icons@v2/icons/github.svg"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;