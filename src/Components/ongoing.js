import React, {useEffect, useMemo, useState} from "react";
import DayContainer from "./dayContainer";
import animeAPI from "../api/getanime";
import Loading from "./loading";

const Ongoing = () => {
  const [titles, setTitles] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const [isError, setErrorState] = useState({error: false, code: ""});

  useEffect(() => {
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    let isRendered = true;

    async function xd() {
      if (isRendered) {
        try {
          toggleLoadState(true);

          for (let day of days) {
            await animeAPI.ongoingScissor(day);
          }
          await setTitles((titles) => (titles = animeAPI.ongoing));
          console.log(`titles: ${titles}`);

          toggleLoadState(false);
        } catch (error) {
          console.error("Ongoing: error:", error);
        }
      }
    }

    if (isRendered) xd();
    console.log("Ongoing updated!");
    document.title = `malendar for current ongoings`;

    return () => (isRendered = false);
  }, []);

  const toggleLoadState = (shouldLoad) => {
    if (shouldLoad) {
      setLoadingState(true);
      setErrorState({error: false, code: ""});
    } else {
      setLoadingState(false);
    }
  };

  let memOngoingList = useMemo(() => {
    let hhh = [];
    console.log("ongoing.js titles are ", titles);
    for (const key in titles) {
      hhh[key] = titles[key].map((el, i) => {
        return (
            <DayContainer
                i={i}
                titles={titles[key]}
                key={"DayContainer__" + i}
                filler={false}
                month={"January"}
                shouldMulti={false}
            />
        );
      });
    }
    // console.log("hhh is ", hhh);
    return hhh;
  }, [titles]);

  return (
      <>
        {isLoading || isError.error ? (
            <Loading error={isError}/>
        ) : (
            <>
              <ul className="Ongoing_Day">{memOngoingList["monday"]}</ul>
              <ul className="Ongoing_Day">{memOngoingList["tuesday"]}</ul>
              <ul className="Ongoing_Day">{memOngoingList["wednesday"]}</ul>
              <ul className="Ongoing_Day">{memOngoingList["thursday"]}</ul>
              <ul className="Ongoing_Day">{memOngoingList["friday"]}</ul>
              <ul className="Ongoing_Day">{memOngoingList["saturday"]}</ul>
              <ul className="Ongoing_Day">{memOngoingList["sunday"]}</ul>
            </>
        )}
      </>
  );
};

export default Ongoing;
