import React from "react";
import Day from "./day";
import {month, year} from "../api/Date";

const Multititle = (props) => {
  return (
      <div
          className="MultiDay"
          style={{
              display: `${props.MV ? "grid" : "none"}`,
          }}
      >
          <h1 className="MultiDay__Header">
              More for {new Date(props.date).getDate()}{" "}
              {month.months[new Date(props.date).getMonth()] + " "}
              {new Date(props.date).getFullYear()}
          </h1>
          <div className="MultiDay__Titles">
              {props.titles.map((el, i) => (
                  <div className="Days__DayContainer" key={i}>
                      <Day
                          id={(i + 1).toString().padStart(2, "0")}
                          key={props.titles.id}
                          ani={props.titles[i]}
                          month={[month, year]}
                          today={new Date().getDate()}
                      />
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Multititle;
