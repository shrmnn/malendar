import React from "react";

const Day = React.memo((props) => {
  const handleClicked = () => {
    console.log("day is clicked!");
    if (props.ani.id) {
      window.open(`https://myanimelist.net/anime/${props.ani.id}`, "_blank");
    }
  };

  let styledDay = {
    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, #0E0E0E 105%), url(${
      props.ani ? props.ani.image : ""
    }) center center no-repeat`,
  };

  return (
      <div
          aria-label={
            props.ani.id
                ? `Anime is ${props.ani.title}, their airing date is ${props.ani.airing}`
                : ""
          }
          className={`day ${!props.ani.day ? "filledDay" : ""} ${
              props.id > props.ldm ? "hidden" : ""
          }`}
          style={props.ani.image ? styledDay : null}
          onClick={handleClicked}
      >
        <div
            className={`dayNum ${
                parseInt(props.id) === props.today ? "today" : ""
            }`}
        >
          {props.ani.day
              ? props.ani.day.toString().padStart(2, "0")
              : props.id <= props.ldm
                  ? props.id
                  : ""}
        </div>
        <div>
          <div className="dayTitle">
            {props.ani
                ? props.ani.title
                : "男子高校生で売れっ子ライトノベル作家をしているけれど、年下のクラスメイトで声優の女の子に首を絞められている! The Animation 2nd Season"}
          </div>
          <div className="daySubtitle">
            {props.ani.studio
                ? props.ani.studio.name
                : "Studio is currently unknown"}
          </div>
        </div>
      </div>
  );
});

export default Day;
