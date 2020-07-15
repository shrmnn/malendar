import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import {useParams} from "react-router";
import "./Styling/grid_container.css";
import AnimeAPI from "../api/getanime";
import {month, year} from "../api/Date";
import Loading from "./loading";
import HeadMenu from "./headMenu";
import DayContainer from "./dayContainer";
import Ongoing from "./ongoing";
import DayPlaceholder from "./Skeleton/dayPlaceholder";

const Container = () => {
    let currentMonth = month.getCurrentMonth();
    let currentYear = year.getCurrentYear();
    const {navYear, navMonth} = useParams();
    if (navYear && navYear >= 1917 && navYear <= 2022 && navMonth) {
        currentMonth = navMonth;
        currentYear = navYear;
    }

    const [titles, setTitles] = useState([]);
    const [date, setDate] = useState({
        month: currentMonth,
        year: currentYear,
    });
    const [isLoading, setLoadingState] = useState(false);
    const [isError, setErrorState] = useState({error: false, code: ""});
    const [fillerWeek, setFillerWeek] = useState([]);

    useEffect(() => {
        function setFirstDay() {
            let tempFillerWeek = [];
            let firstWeekDay =
                month.getFirstWeekDayOfMonth(date.month, date.year) - 1;
            if (firstWeekDay < 0) firstWeekDay = 6;
            tempFillerWeek.length = firstWeekDay;
            tempFillerWeek = AnimeAPI.fillNewList(tempFillerWeek, {
                day: " ",
            });
            setFillerWeek((fillerWeek) => (fillerWeek = [...tempFillerWeek]));
            console.log("sFD calculated");
            return tempFillerWeek;
        }

        async function xd() {
            setLoadingState(true);
            document.body.classList.add("--overflow");
            setErrorState({error: false, code: ""});
            setFirstDay();
            try {
                await AnimeAPI.animeScissors(
                    date.year,
                    month.getSeasonByMonth(date.month),
                    date.month
                );
                console.log("titlelist had updated!");
                await setTitles((titles) => (titles = [...AnimeAPI.titlelist]));
            } catch (error) {
                setErrorState({error: true, code: error});
            }

            document.title = `malendar for ${date.month} ${date.year}`;
            setLoadingState(false);
            document.body.classList.remove("--overflow");
        }

        xd();

        //eslint-disable-next-line
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

    const changeDate = (direction, withParams = 0) => {
        if (date.month === "January" && direction < 0) {
            setDate({month: "December", year: parseInt(date.year) - 1});
            if (withParams) return parseInt(date.year) - 1 + "/December";
        } else if (date.month === "December" && direction > 0) {
            setDate({month: "January", year: parseInt(date.year) + 1});
            if (withParams) return parseInt(date.year) + 1 + "/January";
        } else {
            setDate({
                ...date,
                month:
                    month.months[
                    month.months.findIndex((e) => e === date.month) + direction
                        ],
            });
            if (withParams)
                return (
                    parseInt(date.year) +
                    "/" +
                    month.months[
                    month.months.findIndex((e) => e === date.month) + direction
                        ]
                );
        }
  };

  return (
      <main className="Container">
          <HeadMenu
              monthClick={monthClick}
              yearClick={yearClick}
              date={date}
              changeDate={changeDate}
              withParams={!!(navYear && navMonth)}
          />
          {isLoading || isError.error ? <Loading error={isError}/> : null}
          <Weekdays/>
          <ol className={`Days`}>
              <Switch>
                  <Route exact path="/malendar/ongoing">
                      <Ongoing/>
                  </Route>
                  <Route exact path="/malendar/:navYear/:navMonth">
                      {fillerWeek.map((el, i) => (
                          <li
                              className={`Days__DayContainer Days__Day--filledDay`}
                              key={"Container__" + i}
                          >
                              <DayPlaceholder key={"DayPlaceholder__" + i}/>
                          </li>
                      ))}
                      {titles.map((el, i) => (
                          <DayContainer i={i} titles={titles} key={"DayContainer__" + i}/>
                      ))}
                  </Route>
                  <Route exact path="/malendar/">
                      {fillerWeek.map((el, i) => (
                          <li
                              className={`Days__DayContainer Days__Day--filledDay`}
                              key={"Container__" + i}
                          >
                              <DayPlaceholder key={"DayPlaceholder__" + i}/>
                          </li>
                      ))}

                      {titles.map((el, i) => (
                          <DayContainer
                              i={i}
                              titles={titles}
                              key={"DayContainer__" + i}
                              filler={false}
                          />
                      ))}
                  </Route>
              </Switch>
          </ol>
      </main>
  );
};

const Weekdays = () => (
    <ul className="Days__WeekDays">
        <li>M</li>
        <li>T</li>
        <li>W</li>
        <li>T</li>
        <li>F</li>
        <li>S</li>
        <li>S</li>
    </ul>
);

export default Container;
