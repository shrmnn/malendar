import React from "react";
import "./Styling/Datepicker.css";

const DatePicker = () => {
    return (
        <div className="Datepicker">
            <input type="month" min="1917-01" max="2021-12" defaultValue="2020-07"/>
        </div>
    );
};

export default DatePicker;
