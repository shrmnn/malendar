import React from "react";

const DayPlaceholder = () => {
    return (
        <div
            className={`Days__Day Days__Day--filledDay`}
            aria-label="There is no anime for this day"
        >
            <div className="Days__Day_Notificators">
                <time className={`Days__Day_DayNum`}></time>
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
