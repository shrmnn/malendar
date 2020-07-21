import React from "react";

const DayPlaceholder = (props) => {
  return (
      <div
          className={`Days__Day Days__Day--filledDay`}
          aria-label="There is no anime for this day"
      >
        <div className="Days__Day_Notificators">
          <time
              className={`Days__Day_DayNum Days__Day_DayNum--filledDay ${
                  parseInt(props.id) === props.today ? "Days__Day_DayNum--mToday" : ""
              }`}
          >
            {props.id ? props.id : ""}
          </time>
        </div>

        <div className="Days__Day_CardTitle">
          <div className="Days__Day_CardTitle--DayTitle" itemType="name">
            {" "}
          </div>
          <div
              className="Days__Day_CardTitle--DaySubtitle"
              itemType="productionCompany"
          >
            {"  "}
          </div>
        </div>
      </div>
  );
};

export default DayPlaceholder;
