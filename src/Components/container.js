import React, {useEffect, useRef, useState} from "react";
import {Route, Switch} from "react-router-dom";
import {useLocation, useParams} from "react-router";
import "./Styling/container.css";
import AnimeAPI from "../api/getanime";
import {month, year} from "../api/Date";
import Loading from "./loading";
import HeadMenu from "./headMenu";
import DayContainer from "./dayContainer";
import Ongoing from "./ongoing";
import DayPlaceholder from "./Skeleton/dayPlaceholder";

const Container = () => {
  const location = useLocation();
  const {navYear, navMonth} = useParams();
  const [titles, setTitles] = useState([]);
  const [date, setDate] = useState({
    month: month.getCurrentMonth(),
    year: 2020,
  });
  const [isLoading, setLoadingState] = useState(false);
  const [isError, setErrorState] = useState({error: false, code: ""});
  const [fillerWeek, setFillerWeek] = useState([]);

  const isRendered = useRef(false);

  useEffect(() => {
    let currentMonth = month.getCurrentMonth();
    let currentYear = year.getCurrentYear();

    if (navYear && navYear >= 1917 && navYear <= 2022 && navMonth) {
      currentMonth = navMonth.charAt(0).toUpperCase() + navMonth.slice(1);
      currentYear = navYear;
    }

    if (date.month !== currentMonth || date.year !== currentYear)
      setDate({month: currentMonth, year: currentYear});

    console.log("titlelist had updated!");

    //eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    isRendered.current = true;

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
      //console.log("sFD calculated");
      return tempFillerWeek;
    }

    async function xd() {
      toggleLoadState(true);

      try {
        await AnimeAPI.animeScissors(
            date.year,
            month.getSeasonByMonth(date.month),
            date.month
        );

        await setTitles((titles) => (titles = [...AnimeAPI.titlelist]));
        if (isRendered.current) setFirstDay();
      } catch (error) {
        setErrorState({error: true, code: error});
      }

      document.title = `malendar for ${date.month} ${date.year}`;
      toggleLoadState(false);
    }

    if (isRendered.current) xd();

    return () => (isRendered.current = false);

    //eslint-disable-next-line
  }, [date]);

  const toggleLoadState = (shouldLoad) => {
    if (shouldLoad) {
      setLoadingState(true);
      setErrorState({error: false, code: ""});
    } else {
      setLoadingState(false);
    }
  };

  const monthClick = (withParams = false) => {
    let nMonth = month.getRandomMonth(date);
    setDate({...date, month: nMonth});
    if (withParams) return date.year + "/" + nMonth;
    console.log("Current season is", month.getSeasonByMonth(date.month));
  };

  const yearClick = (withParams = false) => {
    let nYear = year.getRandomYear(date);
    setDate({...date, year: nYear});
    if (withParams) return nYear + "/" + date.month;
  };

  const changeDate = (direction, withParams = false) => {
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
                  <DayContainer
                      i={i}
                      titles={titles}
                      key={"DayContainer__" + i}
                      filler={false}
                      month={date.month}
                  />
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
                      month={date.month}
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
