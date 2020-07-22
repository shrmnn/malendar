import arrow from "../graphics/arrow.svg";
import React from "react";
import {NavLink, useHistory, useLocation} from "react-router-dom";

const HeadMenu = React.memo((props) => {
    const history = useHistory();
    const location = useLocation();
    const isOngoing = location.pathname === "/malendar/ongoing";

    return (
        <div aria-label="head navigation" className="HeadContainer">
            <div className="HeadContainer__DateNav">
                {props.withParams ? (
                    <>
                        {!isOngoing ? (
                            <>
                                <button
                                    tabIndex="0"
                                    className="HeadContainer__Button"
                                    onClick={() =>
                                        history.push(`/malendar/${props.changeDate(-1, true)}`)
                                    }
                                    title="Previous month"
                                >
                                    <img
                                        alt="back-arrow"
                                        style={{transform: `rotate(180deg)`}}
                                        src={arrow}
                                    />
                                </button>
                                <button
                                    tabIndex="0"
                                    className="HeadContainer__Button"
                                    onClick={() =>
                                        history.push(`/malendar/${props.changeDate(1, true)}`)
                                    }
                                    title="Next month"
                                >
                                    <img alt="fur-arrow" src={arrow}/>
                                </button>
                            </>
                        ) : null}
                        <div
                            aria-label="select month"
                            className="HeadContainer__DateNav_DateMonth"
                            onClick={
                                !isOngoing
                                    ? () => history.push(`/malendar/${props.monthClick(true)}`)
                                    : null
                            }
                            title={!isOngoing ? "Click for random month" : ""}
                        >
                            {props.date.month}
                        </div>
                        <div
                            aria-label="select year"
                            className="HeadContainer__DateNav_DateYear"
                            onClick={
                                !isOngoing
                                    ? () => history.push(`/malendar/${props.yearClick(true)}`)
                                    : null
                            }
                            title={!isOngoing ? "Click for random year" : ""}
                        >
                            {props.date.year}
                        </div>
                    </>
                ) : (
                    <>
                        {!isOngoing ? (
                            <>
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

                                <button
                                    tabIndex="0"
                                    className="HeadContainer__Button"
                                    onClick={props.changeDate.bind(this, 1)}
                                    title="Next month"
                                >
                                    <img alt="fur-arrow" src={arrow}/>
                                </button>
                            </>
                        ) : null}
                        <div
                            aria-label="select month"
                            className="HeadContainer__DateNav_DateMonth"
                            onClick={!isOngoing ? props.monthClick : null}
                            title={!isOngoing ? "Click for random month" : null}
                        >
                            {props.date.month}
                        </div>
                        <div
                            aria-label="select year"
                            className="HeadContainer__DateNav_DateYear"
                            onClick={!isOngoing ? props.yearClick : null}
                            title={!isOngoing ? "Click for random year" : null}
                        >
                            {props.date.year}
                        </div>
                    </>
                )}
            </div>
            <div
                aria-label="select if you want to see ongoing or new releases"
                className="HeadContainer__ReleaseNav"
            >
                <NavLink
                    aria-label="Ongoing page (beta)"
                    //onClick={handleClicked}
                    exact
                    className={"HeadContainer__ReleaseNav--menu"}
                    to="/malendar/ongoing"
                    activeClassName="HeadContainer__ReleaseNav--active"
                    title="Ongoing page (beta)"
                >
                    Ongoing
                </NavLink>
                <NavLink
                    strict
                    className={`HeadContainer__ReleaseNav--menu ${
                        location.pathname === "/malendar/"
                            ? "HeadContainer__ReleaseNav--active"
                            : ""
                    }`}
                    aria-label="New Releases"
                    to={`/malendar/${props.date.year}${"/" + props.date.month}`}
                    activeClassName="HeadContainer__ReleaseNav--active"
                    title="New Releases (pages mode)"
                >
                    New releases
                </NavLink>
            </div>
        </div>
    );
});

export default HeadMenu;
