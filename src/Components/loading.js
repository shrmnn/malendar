import React from "react";

const Loading = (props) => (
    <div aria-label="loading..." className="Loading">
      {props.error.error ? `Error has occurred(╥﹏╥)` : `(っ◔◡◔)っ 🍜`}
      {props.error.code ? console.log(props.error.code) : null}
    </div>
);

export default Loading;
