import React from "react";
import usePlaceholderImage from "../api/usePlaceholderImage";
import useLocalState from "../api/useLocalState";

const Day = React.memo((props) => {
  const ani = props.ani;
  const [month, year] = props.month;
  const multistate = !!props.multistate;

  const [imageURL] = useLocalState(ani.image, ani.id);

  const handleClicked = () => {
    if (ani.id) {
      window.open(`https://myanimelist.net/anime/${ani.id}`, "_blank");
    }
  };

  const multititleClicked = (e) => {
    e.stopPropagation();
    props.changeMV();
  };

  let loaded = usePlaceholderImage(ani.image.split(".webp")[0] + "l.webp");

  let styledDay = {
    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, #0E0E0E 100%), url(${
      ani ? (loaded ? loaded : imageURL) : ""
    }) center center / cover no-repeat`,
  };

  return (
      <section
          aria-label={
            ani.id
                ? `[${ani.id}] Anime is ${ani.title}, their airing date is ${ani.airing}`
                : ""
          }
          className={`Days__Day ${
              (!ani.day || typeof ani.day === typeof " ") && props.shouldMulti
                  ? "Days__Day--filledDay"
                  : ""
          } ${
              props.id >
              month.getLastDayOfMonth(year.getCurrentYear(), month.getCurrentMonth())
                  ? "--hidden"
                  : ""
          }`}
          style={ani.image ? styledDay : null}
          onClick={handleClicked}
          rel="nofollow noreferer"
          itemType="Anime"
          itemScope
      >
        <div className="Days__Day_Notificators">
          <time
              className={`Days__Day_DayNum ${
                  parseInt(props.id) === props.today ? "Days__Day_DayNum--mToday" : ""
              }`}
              dateTime={ani.airing}
              itemType="startDate"
          >
            {ani.day && typeof ani.day !== typeof " " && !props.shouldID
                ? ani.day.toString().padStart(2, "0")
                : props.id}
          </time>
          {ani.multi && props.shouldMulti ? (
              <div
                  itemType="alsoThisDay"
                  className={`Days__Day_DayNum Days__Day_DayNum--MultititleNotification 
            ${
                      multistate
                          ? "Days__Day_DayNum--MultititleNotification--active"
                          : ""
                  }`}
                  onClick={multititleClicked}
                  title={`+ ${ani.titleArray.length} anime this day`}
              >
                {"+" + ani.titleArray.length}
              </div>
          ) : null}
          {!props.shouldMulti ? (
              <div
                  itemType="alsoThisDay"
                  className="Days__Day_DayNum Days__Day_DayNum--MultititleNotification"
                  title={`Time of broadcast is ${ani.broadcast.time}`}
              >
                {ani.broadcast.time}
              </div>
          ) : null}
        </div>

        <div className="Days__Day_CardTitle">
          <div className="Days__Day_CardTitle--DayTitle" itemType="name">
            {ani
                ? ani.title
                : "男子高校生で売れっ子ライトノベル作家をしているけれど、年下のクラスメイトで声優の女の子に首を絞められている! The Animation 2nd Season"}
          </div>
          <div
              className="Days__Day_CardTitle--DaySubtitle"
              itemType="productionCompany"
          >
            {ani.studio ? ani.studio.name : "Studio is currently unknown"}
          </div>
        </div>
      </section>
  );
});

export default Day;
