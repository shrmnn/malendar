import React from "react";

const MultititlePlaceholder = (props) => {
    return (
        <div
            className="MultiDay"
            style={{
                display: "none",
            }}
        >
            <h1 className="MultiDay__Header" content={"There is no content"}>
                {""}
            </h1>
            <div className="MultiDay__Titles">{""}</div>
        </div>
    );
};

export default MultititlePlaceholder;
