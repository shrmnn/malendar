import React, {useEffect, useMemo, useState} from "react";
import DayContainer from "./dayContainer";
import animeAPI from "../api/getanime";
import Loading from "./loading";

const Ongoing = () => {
  const [titles, setTitles] = useState({});
  const [isLoading, setLoadingState] = useState(false);
  const [isError, setErrorState] = useState({error: false, code: ""});

  useEffect(() => {
    let isRendered = true;

    async function xd() {
      if (isRendered) {
        try {
          toggleLoadState(true);
          await animeAPI.ongoingScissor();
          await setTitles((titles) => (titles = animeAPI.ongoing));
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
    for (const key in titles) {
      hhh[key] = titles[key].map((el, i) => {
        return (
            <DayContainer
                i={i}
                titles={titles[key]}
                key={"DayContainer__" + i}
                filler={false}
                month={"July"}
                shouldMulti={false}
            />
        );
      });
    }
    return hhh;
  }, [titles]);

  return (
      <>
        {isLoading || isError.error ? <Loading error={isError}/> : null}
        <ul className="Ongoing_Day">{memOngoingList["monday"]}</ul>
        <ul className="Ongoing_Day">{memOngoingList["tuesday"]}</ul>
        <ul className="Ongoing_Day">{memOngoingList["wednesday"]}</ul>
        <ul className="Ongoing_Day">{memOngoingList["thursday"]}</ul>
        <ul className="Ongoing_Day">{memOngoingList["friday"]}</ul>
        <ul className="Ongoing_Day">{memOngoingList["saturday"]}</ul>
        <ul className="Ongoing_Day">{memOngoingList["sunday"]}</ul>
      </>
  );
};

export default Ongoing;
