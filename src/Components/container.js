import React, {useEffect, useState} from "react";
import "./grid_container.css";
import Day from "./day";
import animeScissors, {getLastDayOfMonth, titlelist} from "../api/getanime";
import arrow from "../graphics/arrow.svg";

const Container = () => {
  const [titles, setTitles] = useState([titlelist]);
    const [date, setDate] = useState({month: "July", year: 2020});
    const [isLoading, setLoadingState] = useState(false);
    const [isError, setErrorState] = useState({error: false, code: ""});

  useEffect(() => {
    (async function xd() {
      setLoadingState(true);
        document.body.classList.add("--overflow");
        setErrorState({error: false, code: ""});

      try {
        await animeScissors(
            date.year,
            getSeasonByMonth(date.month),
            date.month
        );
        console.log("titlelist had updated!");
        await setTitles((titles) => (titles = [...titlelist]));
      } catch (error) {
          setErrorState({error: true, code: error});
      }

      document.title = `malendar for ${date.month} ${date.year}`;
      setLoadingState(false);
      document.body.classList.remove("--overflow");
    })();
  }, [date]);

  const getSeasonByMonth = (month) => {
    let season = "";
    if (month === "January" || month === "February") {
      season = "winter";
    } else if (month === "March" || month === "April" || month === "May") {
      season = "spring";
    } else if (month === "June" || month === "July" || month === "August") {
      season = "summer";
    } else season = "fall";

    return season;
  };

  const getRandomMonth = () => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let rMonth = months[Math.ceil(Math.random() * 11)];

    if (rMonth === date.month) {
      rMonth = getRandomMonth();
    }

    return rMonth;
  };

  const monthClick = () => {
    let month = getRandomMonth();
      setDate({...date, month});
      console.log("Current season is", getSeasonByMonth(date.month));
  };

  const yearClick = (e) => {
      setDate({...date, year: Math.ceil(Math.random() * 10) + 2010});
  };

  const changeDate = (direction) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    console.log("hey there what about ", date.month, date.year);

    if (date.month === "January" && direction < 0) {
        setDate({month: "December", year: date.year - 1});
    } else if (date.month === "December" && direction > 0) {
        setDate({month: "January", year: date.year + 1});
    } else {
      setDate({
        ...date,
        month: months[months.findIndex((e) => e === date.month) + direction],
      });
    }
  };

  return (
      <main className="Container">
          <HeadMenu
              monthClick={monthClick}
              yearClick={yearClick}
              date={date}
              changeDate={changeDate}
          />
          <div className={`Days`}>
              {isLoading || isError.error ? <Loading error={isError}/> : null}
              {titles.map((el, i) => (
                  <Day
                      id={(i + 1).toString().padStart(2, "0")}
                      key={i}
                      ani={titles[i]}
                      ldm={getLastDayOfMonth(date.month, date.year)}
                      today={new Date().getDate()}
                  />
              ))}
          </div>
      </main>
  );
};

const Loading = (props) => (
    <div aria-label="loading..." className="Loading">
        {props.error.error ? `Error has occurred(╥﹏╥)` : "(っ◔◡◔)っ 🍥"}
        {props.error.code ? console.log(props.error.code) : null}
    </div>
);

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

export default Container;
