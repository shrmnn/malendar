import React, {useState} from "react";
import "./footer.css";
import moon from "../graphics/moon.svg";

const Footer = React.memo(() => {
    const [toggledTheme, toggleTheme] = useState(false);

    const changeTheme = () => {
        document.body.classList.toggle("blue");
        toggleTheme(!toggledTheme);
    };

    return (
        <footer className="Footer">
            <div
                aria-label="Author of site is Alex Shermann, made in 2020"
                className="Footer__Right"
            >
                Alex Shermann [2020]
            </div>
            <div className="Footer__Left">
                <p
                    aria-label="Site is recommended for 18+"
                    className="marker"
                    title="Site is recommended for 18+"
                >
                    18+
                </p>
                <img
                    alt="change theme"
                    aria-label="change theme"
                    height="32"
                    width="32"
                    src={moon}
                    onClick={changeTheme}
                    className={toggledTheme ? "Footer__Left--toggled" : ""}
                />
                <a
                    aria-label="Link to github"
                    href="https://github.com/shrmnn/malendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                >
                    <img
                        alt="github link"
                        aria-label="github link"
                        height="32"
                        width="32"
                        className="Footer__Left--github"
                        src="https://unpkg.com/simple-icons@v3/icons/github.svg"
                    />
                </a>
            </div>
        </footer>
    );
});

export default Footer;
