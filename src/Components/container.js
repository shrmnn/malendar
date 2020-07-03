import React, {useEffect, useState} from "react";
import "./container.css";
import Day from "./day";
import animeScissors, {getLastDayOfMonth, titlelist} from "../api/getanime";

const Container = () => {
  const [titles, setTitles] = useState([titlelist]);
  const [month, setMonth] = useState("February");
  const [year, setYear] = useState(2020);
  const [isLoading, setLoadingState] = useState(false);
  const [isError, setErrorState] = useState(false);

  useEffect(() => {
    (async function xd() {
      setLoadingState(true);
      console.log(`year: ${year} and month: ${month}`);
      try {
        await animeScissors(year, getSeasonByMonth(month), month);
        console.log("titlelist had updated!");
        await setTitles((titles) => (titles = [...titlelist]));
      } catch (error) {
        setErrorState(true);
      }

      setLoadingState(false);
    })();
  }, [month, year]);

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

  const monthClick = () => {
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

    setMonth((month) => (month = months[Math.ceil(Math.random() * 11)]));
    console.log("Current season is", getSeasonByMonth(month));
  };

  const yearClick = () => {
    setYear((year) => (year = Math.ceil(Math.random() * 20) + 2000));
  };

  return (
      <main className="Container">
        <div aria-label="head navigation" className="Head-Container">
          <div className="Date-nav">
            <div
                aria-label="select month"
                className="dateMonth padding-left"
                onClick={monthClick}
            >
              {month}
            </div>
            <div
                aria-label="select year"
                className="dateYear padding-right"
                onClick={yearClick}
            >
              {year}
            </div>
          </div>
          <div
              aria-label="select if you want to see ongoing or new releases"
              className="Release-nav"
          >
            <div className="padding-left">Ongoing</div>
            <div className="padding-right active">New releases</div>
          </div>
        </div>

        <div className="Days">
          {isLoading ? (
              <Loading/>
          ) : !isError ? (
              titles.map((el, i) => (
                  <Day
                      id={(i + 1).toString().padStart(2, "0")}
                      key={i}
                      ani={titles[i]}
                      ldm={getLastDayOfMonth(month, year)}
                  />
              ))
          ) : (
              <Loading text={"Error has occurred(╥﹏╥)"}/>
          )}
        </div>
      </main>
  );
};

const Loading = (props) => (
    <span role="img" aria-label="loading..." className="loading">
    {props.text ? props.text : "(っ◔◡◔)っ 🍥"}
  </span>
);

export default Container;
