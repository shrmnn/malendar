import arrow from "../graphics/arrow.svg";
import React from "react";
import {NavLink, useHistory} from "react-router-dom";

const HeadMenu = React.memo((props) => {
    const history = useHistory();
    return (
        <div aria-label="head navigation" className="HeadContainer">
            <div className="HeadContainer__DateNav">
                {props.withParams ? (
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
                ) : (
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
                )}

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
            </div>
            <div
                aria-label="select if you want to see ongoing or new releases"
                className="HeadContainer__ReleaseNav"
            >
                <NavLink
                    className={`padding-left`}
                    //onClick={handleClicked}
                    exact
                    to="/malendar/ongoing"
                    activeClassName="HeadContainer__ReleaseNav--active"
                >
                    Ongoing
                </NavLink>
                <NavLink
                    strict
                    className={`padding-right`}
                    //onClick={handleClicked}
                    to={`/malendar/${props.date.year}${"/" + props.date.month}`}
                    activeClassName="HeadContainer__ReleaseNav--active"
                >
                    New releases
                </NavLink>
            </div>
        </div>
    );
});

export default HeadMenu;
