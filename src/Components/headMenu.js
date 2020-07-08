import arrow from "../graphics/arrow.svg";
import React from "react";

const HeadMenu = (props) => (
    <div aria-label="head navigation" className="HeadContainer">
        <div className="HeadContainer__DateNav">
            <button
                tabIndex="0"
                className="HeadContainer__Button"
                onClick={props.changeDate.bind(this, -1)}
                title="Previous month"
            >
                <img
                    alt="back-arrow"
                    style={{transform: `rotate(180deg)`}}
                    src={arrow}
                />
            </button>

            <div
                aria-label="select month"
                className="HeadContainer__DateNav_DateMonth"
                onClick={props.monthClick}
                title="Click for random month"
            >
                {props.date.month}
            </div>
            <div
                aria-label="select year"
                className="HeadContainer__DateNav_DateYear"
                onClick={props.yearClick}
                title="Click for random year"
            >
                {props.date.year}
            </div>

            <button
                tabIndex="0"
                className="HeadContainer__Button"
                onClick={props.changeDate.bind(this, 1)}
                title="Next month"
            >
                <img alt="fur-arrow" src={arrow}/>
            </button>
        </div>
        <div
            aria-label="select if you want to see ongoing or new releases"
            className="HeadContainer__ReleaseNav"
        >
            <div className="padding-left">Ongoing</div>
            <div className="padding-right HeadContainer__ReleaseNav--active">
                New releases
            </div>
        </div>
    </div>
);

export default HeadMenu;
