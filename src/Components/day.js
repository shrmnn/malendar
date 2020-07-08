import React from "react";

const Day = React.memo((props) => {
  const ani = props.ani;
  const [month, year] = props.month;

  const handleClicked = () => {
    if (ani.id) {
      window.open(`https://myanimelist.net/anime/${ani.id}`, "_blank");
    }
  };

  const multititleClicked = (e) => {
    e.stopPropagation();
    props.changeMV(ani.day - 1);
  };

  let styledDay = {
    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, #0E0E0E 105%), url(${
        ani ? ani.image : ""
    }) center center / cover no-repeat`,
  };

  return (
      <div
          aria-label={
            ani.id
                ? `[${ani.id}] Anime is ${ani.title}, their airing date is ${ani.airing}`
                : ""
          }
          className={`Days__Day ${!ani.day ? "Days__Day--filledDay" : ""} ${
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
            {ani.day ? ani.day.toString().padStart(2, "0") : props.id}
          </time>
          {ani.multi ? (
              <div
                  itemType="alsoThisDay"
                  className="Days__Day_DayNum Days__Day_DayNum--MultititleNotification"
                  onClick={multititleClicked}
                  title={`Also ${ani.titleArray.length} anime this day`}
              >
                {"+" + ani.titleArray.length}
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
      </div>
  );
});

export default Day;
