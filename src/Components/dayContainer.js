import React, {useEffect, useRef, useState} from "react";
import Day from "./day";
import {month, year} from "../api/Date";
import Multititle from "./multititle";
import DayPlaceholder from "./Skeleton/dayPlaceholder";

const DayContainer = React.memo((props) => {
  const [multiState, setMultiState] = useState(false);
  const isMulti = useRef(false);

  const pMonth = props.month;
    const {i, titles, filler} = props;
    let multititle = null;

  useEffect(
      () => {
          if (titles[i].multi && props.shouldMulti) {
              isMulti.current = true;
              if (isMulti.current) changeState(false);
          }
          return () => (isMulti.current = false);
      },
      //eslint-disable-next-line
      [pMonth]
  );

  const changeState = (forceState = undefined) => {
    if (forceState !== undefined) {
      setMultiState(forceState);
    } else setMultiState(!multiState);
  };

    if (titles[i].multi && props.shouldMulti) {
        multititle = (
            <Multititle
                date={titles[i].airing}
                titles={titles[i].titleArray}
                MV={multiState}
                key={titles[i].id + "_" + multiState.toString()}
            />
        );
    }

  return (
      <React.Fragment>
          <li
              className={`Days__DayContainer ${
                  (!titles[i].day || typeof titles[i].day === typeof " ") &&
                  props.shouldMulti
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
                      shouldMulti={props.shouldMulti}
                  />
              ) : (
                  <DayPlaceholder
                      id={filler ? " " : (i + 1).toString().padStart(2, "0")}
                      today={new Date().getDate()}
                  />
              )}
          </li>
          {multiState ? multititle : ""}
      </React.Fragment>
  );
});

export default DayContainer;
