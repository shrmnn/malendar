import React from "react";
import {month, year} from "../api/Date";
import "./Styling/FourZeroFour.css";

const FourZeroFour = () => {
    const randomlink =
        "https://shrmnn.github.io/malendar/" +
        year.getRandomYear(2020) +
        "/" +
        month.getRandomMonth("January");

    return (
        <div className="FourZeroFour">
            <h1>404</h1>
            <h2>┬┴┬┴┤(･_├┬┴┬┴</h2>
            <h5>no jokes</h5>
            <h6>
                What about <a href={randomlink}>{randomlink}</a>
            </h6>
        </div>
    );
};

export default FourZeroFour;
