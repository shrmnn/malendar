import React, {useEffect} from "react";

const Loading = (props) => {
  useEffect(() => {
    document.body.classList.add("--overflow");
    return function cleanup() {
      document.body.classList.remove("--overflow");
    };
  }, []);

  return (
      <div aria-label="loading..." className="Loading">
        {props.error.error ? `Error has occurred(╥﹏╥)` : `(っ◔◡◔)っ 🍜`}
        {props.error.code ? console.log(props.error.code) : null}
      </div>
  );
};

export default Loading;
