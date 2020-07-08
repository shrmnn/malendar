import React, {useEffect, useState} from "react";
import "./grid_container.css";
import animeScissors, {titlelist} from "../api/getanime";
import {month, year} from "../api/Date";
import Loading from "./loading";
import HeadMenu from "./headMenu";
import DayContainer from "./dayContainer";

const Container = () => {
  const [titles, setTitles] = useState([titlelist]);
  const [date, setDate] = useState({
    month: month.getCurrentMonth(),
    year: year.getCurrentYear(),
  });
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
            month.getSeasonByMonth(date.month),
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

  const monthClick = () => {
    let nMonth = month.getRandomMonth(date);
    setDate({...date, month: nMonth});
    console.log("Current season is", month.getSeasonByMonth(date.month));
  };

  const yearClick = () => {
    let nYear = year.getRandomYear(date);
    setDate({...date, year: nYear});
  };

  const changeDate = (direction) => {
    console.log("hey there what about ", date.month, date.year);

    if (date.month === "January" && direction < 0) {
      setDate({month: "December", year: date.year - 1});
    } else if (date.month === "December" && direction > 0) {
      setDate({month: "January", year: date.year + 1});
    } else {
      setDate({
        ...date,
        month:
            month.months[
            month.months.findIndex((e) => e === date.month) + direction
                ],
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
              <DayContainer i={i} titles={titles} key={"DayContainer__" + i}/>
          ))}
        </div>
      </main>
  );
};

export default Container;
