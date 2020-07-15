import React, {Suspense, useState} from "react";
import Day from "./day";
import {month, year} from "../api/Date";
//import Multititle from "./multititle";
import MultititlePlaceholder from "./Skeleton/multititlePlaceholder";
import DayPlaceholder from "./Skeleton/dayPlaceholder";

const DayContainer = React.memo((props) => {
  const [multititleState, setMultititleState] = useState([]);
  const [currentDay, setCurrentDay] = useState(-1);

  // multititleState:
  // state: boolean
  // key of array is a day of Days (for like m[15] = 16 of Days

  const changeState = (day) => {
    let arraylist = multititleState;
    arraylist.length = 31;
    arraylist.fill(false);
    if (day !== currentDay) {
      arraylist[day] = true;
      setCurrentDay(day);
    } else {
      arraylist[day] = false;
      setCurrentDay(-1);
    }

    setMultititleState((multititleState) => (multititleState = [...arraylist]));
    //console.log("ну собсна поменялось все лол\n", multititleState);
  };

  const Multititle = React.lazy(() => import("./multititle"));
  const {i, titles, filler} = props;

  return (
      <React.Fragment>
        <li
            className={`Days__DayContainer ${
                !titles[i].day || typeof titles[i].day === typeof " "
                    ? "Days__Day--filledDay"
                    : ""
            }`}
            key={"Container__" + i}
        >
          {titles[i].id ? (
              <Day
                  id={filler ? " " : (i + 1).toString().padStart(2, "0")}
                  key={titles[i].id}
                  ani={titles[i]}
                  month={[month, year]}
                  today={new Date().getDate()}
                  changeMV={changeState}
              />
          ) : (
              <DayPlaceholder/>
          )}
        </li>
        <Suspense fallback={<MultititlePlaceholder/>}>
          {titles[i].multi ? (
              <Multititle
                  date={titles[i].airing}
                  titles={titles[i].titleArray}
                  MV={multititleState[titles[i].day - 1]}
                  key={titles[i].id + multititleState[titles[i].day - 1]}
              />
          ) : (
              ""
          )}
        </Suspense>
      </React.Fragment>
  );
});

export default DayContainer;
