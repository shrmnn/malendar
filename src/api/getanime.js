import {month} from "./Date";

//const API = "https://api.jikan.moe/v3/";
const API = process.env.REACT_APP_API;
const PROXY = "";

export let titlelist = [];

const getSeason = async (cyear, season) => {
  const response = await fetch(`${PROXY}${API}season/${cyear}/${season}/`)
      //const response = await fetch(`${API}season/`)
      .then((res) => {
        //console.log(res);
        if (res.status === 429) {
          console.log("Too many requests!");
        }
        //console.log('response is ', res);
        if (!res.ok) {
          console.error("Could not fetch!");
        }
        return res;
      });
  //console.log(`Fetching ${PROXY}${API}season/${year}/${season}/`);

  const resJSON = await response.json();
  return resJSON["anime"];
};

const getAnimelist = (anime, cmonth, cyear) => {
  let animelist = [];
  animelist.push(anime.map((el) => el));
  animelist = animelist[0];

  for (const el in animelist) {
    animelist[el] = {
      id: animelist[el].mal_id,
      title: animelist[el].title,
      airing: month.convertToJapanTime(animelist[el].airing_start),
      image: animelist[el].image_url.split(".jpg")[0] + "l.jpg",
      studio: animelist[el].producers[0],
      members: animelist[el].members,
      titleArray: [],
    };
  }
  titlelist = animelist;
  getAnimeByMonth(cmonth, cyear);

  //console.log("getAnimelist is ", titlelist);
  return true;
};

const sortAnime = (sortBy) => {
  //console.log('sort has started!', titlelist);
  let animelist = [...titlelist];

  if (sortBy === 0) {
    animelist.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else return 0;
    });
  } else if (sortBy === 1) {
    animelist.sort((a, b) => {
      if (a.members > b.members) {
        return 1;
      } else if (a.members < b.members) {
        return -1;
      } else return 0;
    });
  } else {
    animelist.sort((a, b) => {
      if (a.airing > b.airing) {
        return 1;
      } else if (a.airing < b.airing) {
        return -1;
      } else return 0;
    });
  }

  titlelist = [...animelist];
  //console.log("sort is finished!", titlelist);
};

const getAnimeByMonth = (cmonth, cyear) => {
  sortAnime(1);
  let animelist = [...titlelist].reverse();
  let newlist = [];
  newlist.length = month.getLastDayOfMonth(cmonth, cyear);
  newlist = fillNewList(newlist, cmonth, cyear);

  let firstDayOfMonth = new Date(`01 ${cmonth} ${cyear}`).getTime();
  let lastDayOfMonth = new Date(
      `${month.getLastDayOfMonth(cmonth, cyear)} ${cmonth} ${cyear}`
  ).getTime();

  //console.log(firstDayOfMonth, lastDayOfMonth);

  animelist.forEach((a, index) => {
    let currentDate = new Date(a.airing).getTime();

    if (currentDate <= lastDayOfMonth && currentDate >= firstDayOfMonth) {
      //console.log(firstDayOfMonth, currentDate, lastDayOfMonth);
      //console.log(a, "a.airing is true");
      a.day = new Date(a.airing).getDate();

      if (newlist[a.day - 1].id) {
        //console.log("temporal newlist is", newlist);
        newlist[a.day - 1]["multi"] = true;
        newlist[a.day - 1].titleArray.push(a);
      } else {
        newlist[a.day - 1] = a;
      }

      return true;
    }
    return false;
  });

  //console.log("animelist after gabm is", newlist);
  titlelist = [...newlist];
};

const fillNewList = (newlist) => {
  let dumbTitle = {
    id: "",
    title: "",
    airing: "",
    image: "",
    studio: {name: ""},
    multi: false,
    titleArray: [],
  };

  let animelist = [...newlist];
  animelist.fill(dumbTitle, 0, animelist.length);
  /*console.log(
        "Filled list is ",
        animelist
      );*/
  return animelist;
};

const animeScissors = async (cyear, season, cmonth) => {
  //console.log(`${API}season/${year}/${season}/`);
  let animeJSON = await getSeason(cyear, season);
  //console.log(animeJSON);
  //let result = await getAnimelist(animeJSON);
  return await getAnimelist(animeJSON, cmonth, cyear);
};

/*const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};*/

export default animeScissors;
