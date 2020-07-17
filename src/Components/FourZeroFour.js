import React, {useEffect} from "react";
import {month, year} from "../api/Date";
import "./Styling/FourZeroFour.css";
import Logo from "../graphics/fourzerofour.webp";

const FourZeroFour = () => {
    useEffect(() => {
        document.title = "404. You shall (not) find";
        const header = document.querySelector(".Header");

        header.classList.add("--shadow");
        return function cleanup() {
            header.classList.remove("--shadow");
        };
    }, []);

    const randomlink =
        "https://shrmnn.github.io/malendar/" +
        year.getRandomYear(2020) +
        "/" +
        month.getRandomMonth("January");

    return (
        <div className="FourZeroFour">
            <div></div>
            <h1>{"fourzerofour      fourzerofouru"}</h1>
            <h2 title="Page not found">
                {"おしえて おしえて よ\t \tページが見つかりません"}
            </h2>
            <a
                aria-label="Link to random page. Maybe it would be better than 404 page"
                title="What about random page?"
                href={randomlink}
            >
                <img alt="404 error" src={Logo}/>
            </a>
        </div>
    );
};

export default FourZeroFour;
