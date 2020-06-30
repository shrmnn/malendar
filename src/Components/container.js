import React, {useEffect, useState} from "react";
import "./container.css";
import Day from "./day";
import animeScissors, {getLastDayOfMonth, titlelist} from "../api/getanime";

const Container = () => {
  const [titles, setTitles] = useState([titlelist]);
  const [month, setMonth] = useState("February");
  const [year, setYear] = useState(2020);

    useEffect(() => {
      (async function xd() {
        console.log(`year: ${year} and month: ${month}`);
        await animeScissors(year, getSeasonByMonth(month), month);
        //console.log('Titlelist is ', titlelist);
        console.log("titlelist had updated!");
        await setTitles((titles) => (titles = [...titlelist]));
        //await getLargeImages();
        //console.log('Titlelist comparison: ', titles, typeof titles);
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
          <div className="Head-Container">
            <div className="Date-nav">
              <div className="dateMonth padding-left" onClick={monthClick}>
                {month}
              </div>
              <div className="dateYear padding-right" onClick={yearClick}>
                {year}
              </div>
            </div>
            <div className="Release-nav">
              <div className="padding-left">Ongoing</div>
              <div className="padding-right active">New releases</div>
            </div>
          </div>

          <div className="Days">
            {titles.length > 0 ? (
                titles.map((el, i) => (
                    <Day
                        id={(i + 1).toString().padStart(2, "0")}
                        key={i}
                        ani={titles[i]}
                        ldm={getLastDayOfMonth(month, year)}
                    />
                ))
            ) : (
                <div className="simpleText">There is no data on this period</div>
            )}
          </div>
        </main>
    );
};

export default Container;
