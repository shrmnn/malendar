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

const Container = React.memo((props) => {
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
  const pastDate = useRef({});

  /*console.log(
      "Container: render \n [",
      "\ntitles",
      titles,
      "\ndate",
      date,
      "\npastdate",
      pastDate.current,
      "\nisRendered",
      isRendered,
      "\nisLoading",
      isLoading,
      "\nisError",
      isError,
      "\nfillerWeek",
      fillerWeek,
      "\nlocation",
      location,
      "\nnav",
      navYear,
      navMonth,
      "\nprops",
      props,
      "]"
    );*/

  useEffect(() => {
    if (JSON.stringify(pastDate.current) !== JSON.stringify(date)) {
      //console.log("tick");
      let currentMonth = "";
      let currentYear = 0;

      if (currentMonth !== month.getCurrentMonth())
        currentMonth = month.getCurrentMonth();
      if (currentYear !== year.getCurrentYear())
        currentYear = year.getCurrentYear();

      if (navYear && navYear >= 1917 && navYear <= 2022 && navMonth) {
        currentMonth = navMonth.charAt(0).toUpperCase() + navMonth.slice(1);
        currentYear = parseInt(navYear);
      }

      if (date.month !== currentMonth || date.year !== currentYear) {
          setDate((date) => (date = {month: currentMonth, year: currentYear}));
      }

      console.log("Container updated!");
    } else if (location.pathname !== "/malendar/ongoing/") {
      setDate(
          (date) =>
              (date = {
                  month: month.getCurrentMonth(),
                  year: year.getCurrentYear(),
              })
      );
    }

    //eslint-disable-next-line
  }, [location.pathname]);

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
      if (fillerWeek.length !== tempFillerWeek.length)
        setFillerWeek((fillerWeek) => (fillerWeek = [...tempFillerWeek]));
      return tempFillerWeek;
    }

    async function xd() {
      toggleLoadState(true);
      let shouldUpdate = true;
      try {
        if (JSON.stringify(pastDate.current) !== JSON.stringify(date)) {
          if (
              month.getSeasonByMonth(date.month) ===
              month.getSeasonByMonth(pastDate.current.month) &&
              date.year === pastDate.current.year
          ) {
            shouldUpdate = false;
            console.assert(
                month.getSeasonByMonth(date.month),
                month.getSeasonByMonth(pastDate.current.month)
            );
          }

          if (date.year > 1900 && date.year < 2025) {
            //console.log("click");
            await AnimeAPI.animeScissors(
                //await AnimeAPI.testAnimeScissors(
                date.year,
                month.getSeasonByMonth(date.month),
                date.month,
                shouldUpdate
            );
          }

          await setTitles((titles) => (titles = [...AnimeAPI.titlelist]));
          pastDate.current = date;
        }

        if (isRendered.current) setFirstDay();
      } catch (error) {
          setErrorState({error: true, code: error});
      }
      if (location.pathname !== "/malendar/ongoing") {
        document.title = `malendar for ${date.month} ${date.year}`;
      }
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
          <ol
              className={`Days ${
                  location.pathname === "/malendar/ongoing" ? "ongoing" : ""
              }`}
          >
              <Weekdays/>
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
                              shouldMulti={true}
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
                              shouldMulti={true}
                          />
                      ))}
                  </Route>
              </Switch>
          </ol>
      </main>
  );
});

const Weekdays = React.memo(() => (
    <React.Fragment>
        <li id="Monday">M</li>
        <li id="Tuesday">T</li>
        <li id="Wednesday">W</li>
        <li id="Thursday">T</li>
        <li id="Friday">F</li>
        <li id="Saturday">S</li>
        <li id="Sunday">S</li>
        <li id="Hiddenday_1"></li>
        <li id="Hiddenday_2"></li>
    </React.Fragment>
));

export default Container;
