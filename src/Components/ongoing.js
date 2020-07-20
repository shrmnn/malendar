import React, {useEffect, useState} from "react";
import DayContainer from "./dayContainer";
import animeAPI from "../api/getanime";

const Ongoing = () => {
  const [titles, setTitles] = useState({});

  useEffect(() => {
    let isRendered = true;

    async function xd() {
      if (isRendered) {
        try {
          await animeAPI.ongoingScissor();
          await setTitles((titles) => (titles = animeAPI.ongoing));
        } catch (error) {
          console.error("Ongoing: error:", error);
        }
      }
    }

    xd();
    console.log("Ongoing updated!");
    document.title = `malendar for current ongoings`;

    return () => (isRendered = false);
  }, []);

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

  return (
      <>
        <ul className="Ongoing_Day">{hhh["monday"]}</ul>
        <ul className="Ongoing_Day">{hhh["tuesday"]}</ul>
        <ul className="Ongoing_Day">{hhh["wednesday"]}</ul>
        <ul className="Ongoing_Day">{hhh["thursday"]}</ul>
        <ul className="Ongoing_Day">{hhh["friday"]}</ul>
        <ul className="Ongoing_Day">{hhh["saturday"]}</ul>
        <ul className="Ongoing_Day">{hhh["sunday"]}</ul>
      </>
  );
};

export default Ongoing;
