import {month} from "./Date";
import * as localdata from "../data/2020/spring.json";

const API = process.env.REACT_APP_API;
const PROXY = "";

/*const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};*/

class AnimeAPI {
  titlelist = [];
  ongoing = [];
  animeJSON = [];
  animecontroller = new AbortController();

  animeScissors = async (cyear, season, cmonth, shouldUpdate = true) => {
    if (shouldUpdate) {
      this.animeJSON = await this.getSeason(cyear, season);
      //console.log("this.animeJSON:", this.animeJSON);
      this.animeJSON = localdata.default;
    }
    return await this.getLocalAnimelist(this.animeJSON, cmonth, cyear);
  };

  getSeason = async (cyear, season) => {
    const signal = this.animecontroller.signal;

    try {
      const response = await fetch(
          `${PROXY}${API}v3/season/${cyear}/${season}/`,
          //`https://raw.githubusercontent.com/shrmnn/jikan_seasons_database/master/${cyear}/${season}.json`,
          {
            signal,
          }
      ).then((res) => {
        if (res.status === 429) {
          this.animecontroller.abort();
          console.log("Too many requests!");
        }
        if (!res.ok) {
          this.animecontroller.abort();
          console.error("Could not fetch!");
        }
        return res;
      });

      const resJSON = await response.json();
      return resJSON["anime"];
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  getAnimelist = (anime, cmonth, cyear) => {
    let animelist = [];
    animelist.push(anime.map((el) => el));
    animelist = animelist[0];

    for (const el in animelist) {
      animelist[el] = {
        id: animelist[el].mal_id,
        title: animelist[el].title,
        airing: month.convertToJapanTime(animelist[el].airing_start),
        image: animelist[el].image_url.split(".jpg")[0] + ".webp",
        studio: animelist[el].producers[0],
        members: animelist[el].members,
        titleArray: [],
      };
    }
    this.titlelist = animelist;
    this.getAnimeByMonth(cmonth, cyear);

    //console.log("getAnimelist is ", titlelist);
    return true;
  };

  sortAnime = (sortBy, animelist) => {
    //console.log('sort has started!', titlelist);
    if (sortBy === undefined) sortBy = 3;
    if (animelist === undefined) animelist = [...this.titlelist];
    const toSortAnimelist = [...animelist];

    if (sortBy === 0) {
      toSortAnimelist.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else return 0;
      });
    } else if (sortBy === 1) {
      toSortAnimelist.sort((a, b) => {
        if (parseInt(a.members) > parseInt(b.members)) {
          return 1;
        } else if (parseInt(a.members) < parseInt(b.members)) {
          return -1;
        } else return 0;
      });
    } else if (sortBy === 2) {
      toSortAnimelist.sort((a, b) => {
        if (a.broadcast === null) a.broadcast.time = "00:00";
        if (b.broadcast === null) b.broadcast.time = "00:00";
        if (a.broadcast.time > b.broadcast.time) {
          return 1;
        } else if (a.broadcast.time < b.broadcast.time) {
          return -1;
        } else return 0;
      });
    } else {
      toSortAnimelist.sort((a, b) => {
        if (a.airing > b.airing) {
          return 1;
        } else if (a.airing < b.airing) {
          return -1;
        } else return 0;
      });
    }

    animelist = [...toSortAnimelist];
    console.log("sort is finished!", animelist);
    return animelist;
  };

  getAnimeByMonth = (cmonth, cyear) => {
    //console.log("getAnimeByMonth: ", cmonth, cyear);
    this.titlelist = this.sortAnime(1, this.titlelist);
    let animelist = [...this.titlelist].reverse();
    let newlist = [];
    newlist.length = month.getLastDayOfMonth(cmonth, cyear);
    newlist = this.fillNewList(newlist);

    const firstDayOfMonth = new Date(`01 ${cmonth} ${cyear}`).getTime();
    const lastDayOfMonth = new Date(
        `${month.getLastDayOfMonth(cmonth, cyear)} ${cmonth} ${cyear}`
    ).getTime();

    //console.log(firstDayOfMonth, lastDayOfMonth);

    animelist.forEach((a, index) => {
      const currentDate = new Date(a.airing).getTime();
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

    console.log("animelist after gabm is", newlist);
    this.titlelist = [...newlist];
  };

  fillNewList = (newlist) => {
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
    /*console.log("Filled list is ", animelist);*/
    return animelist;
  };

  //test api below
  testAnimeScissors = async (cyear, season, cmonth) => {
    let animeJSON = await this.testGetSeason(cyear, season);
    return await this.testGetAnimelist(animeJSON, cmonth, cyear);
  };

  testGetSeason = async (cyear, season) => {
    console.log("season is", season);
    try {
      const response = await fetch(
          `${API}v4-alpha/seasons/${cyear}/${season}/`
      ).then((res) => {
        if (res.status === 429) {
          console.log("Too many requests!");
        }
        if (!res.ok) {
          console.error("Could not fetch!");
        }
        return res;
      });
      const resJSON = await response.json();
      return resJSON.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  testGetAnimelist = (anime, cmonth, cyear) => {
    let animelist = [];
    animelist.push(anime.map((el) => el));
    animelist = animelist[0];

    for (const el in animelist) {
      animelist[el] = {
        id: animelist[el].mal_id,
        title: animelist[el].title,
        title_jp: animelist[el].title_japanese,
        aired: animelist[el].aired,
        airing: month.convertToJapanTime(animelist[el].aired.from),
        image: animelist[el].images.webp.image_url,
        studio: animelist[el].studios[0],
        members: animelist[el].members,
        broadcast: animelist[el].broadcast,
        titleArray: [],
      };
    }
    this.titlelist = animelist;
    this.testGetAnimeByMonth(cmonth, cyear);
    //this.sortAnime(2, animelist);
    //this.getOngoingList(animelist);

    console.log("getAnimelist is ", animelist);
    return true;
  };

  testGetAnimeByMonth = (cmonth, cyear) => {
    this.titlelist = this.sortAnime(1);
    let animelist = [...this.titlelist].reverse();
    let newlist = [];
    newlist.length = month.getLastDayOfMonth(cmonth, cyear);
    newlist = this.testFillNewList(newlist);

    const firstDayOfMonth = new Date(`01 ${cmonth} ${cyear}`).getTime();
    const lastDayOfMonth = new Date(
        `${month.getLastDayOfMonth(cmonth, cyear)} ${cmonth} ${cyear}`
    ).getTime();

    animelist.forEach((a, index) => {
      const currentDate = new Date(a.airing).getTime();

      if (currentDate <= lastDayOfMonth && currentDate >= firstDayOfMonth) {
        a.day = a.aired.prop.from.day;

        if (newlist[a.day - 1].id) {
          newlist[a.day - 1]["multi"] = true;
          newlist[a.day - 1].titleArray.push(a);
        } else {
          newlist[a.day - 1] = a;
        }

        return true;
      }
      return false;
    });
    this.titlelist = [...newlist];
  };

  testFillNewList = (newlist) => {
    let dumbTitle = {
      id: "",
      title: "",
      airing: "",
      image: "",
      studio: {name: ""},
      multi: false,
      titleArray: [],
      day: 0,
    };

    let animelist = [...newlist];
    animelist.fill(dumbTitle, 0, animelist.length);
    /*console.log(
                          "Filled list is ",
                          animelist
                        );*/
    return animelist;
  };

  ongoingScissor = async () => {
    const ongoing = await this.getOngoing();
    this.ongoing = ongoing;
    this.ongoingToOngoinglist(ongoing);
    return true;
  };

  getOngoing = async () => {
    try {
      const response = await fetch(`${API}v4-alpha/schedules`).then((res) => {
        if (res.status === 429) {
          console.log("Too many requests!");
        }
        if (!res.ok) {
          console.error("Could not fetch!");
        }
        return res;
      });
      const resJSON = await response.json();
      return resJSON.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  ongoingToOngoinglist = (animelist) => {
    let templist = animelist;
    let hhh = [];
    console.assert(
        templist === animelist,
        "oTo: templist is not equal with animelist"
    );

    for (const key in templist) {
      hhh[key] = [];
      if (key === "unknown" || key === "other") continue;
      for (let i in templist[key]) {
        try {
          hhh[key][i] = {
            id: templist[key][i].mal_id,
            title: templist[key][i].title,
            title_jp: templist[key][i].title_japanese,
            aired: templist[key][i].aired,
            airing: month.convertToJapanTime(templist[key][i].aired.from),
            image: templist[key][i].images.webp.image_url,
            studio: templist[key][i].studios[0],
            members: templist[key][i].members,
            broadcast: templist[key][i].broadcast,
            titleArray: [],
            //day: templist[key][i].aired.prop.from.day,
          };
        } catch (e) {
          console.error(e);
        }
      }
      hhh[key] = this.sortAnime(2, hhh[key]);
    }

    this.ongoing = hhh;
  };

  getOngoingList = (animelist) => {
    console.log("gOL al:", animelist);
    let templist = [...animelist];
    let newOngoing = {
      Mondays: [],
      Tuesdays: [],
      Wednesdays: [],
      Thursdays: [],
      Fridays: [],
      Saturdays: [],
      Sundays: [],
      Unknown: [],
    };

    /* Ongoing = [Mondays[]...Sundays[]]
     * Mondays = [0{},1{},2{},3{}]
     * ...
     * Sundays = [0{},1{},2{},3{}]
     * */

    for (const el in templist) {
      if (templist[el].broadcast) {
        newOngoing[templist[el].broadcast.day].push(templist[el]);
      } else {
        newOngoing["Unknown"].push(templist[el]);
      }
    }
    console.log("getOngoingList", newOngoing);
    this.ongoing = newOngoing;

    return true;
  };

  //local api below

  getLocalAnimelist = (anime, cmonth, cyear) => {
    let animelist = [];

    console.log("Anime is", anime);
    for (let title in anime) {
      animelist.push(anime[title]);
    }

    for (const el in animelist) {
      animelist[el] = {
        id: animelist[el].mal_id,
        title: animelist[el].title,
        airing: month.convertToJapanTime(animelist[el].airing_start),
        image: animelist[el].image_url.split(".jpg")[0] + ".webp",
        studio: animelist[el].producers[0],
        members: animelist[el].members,
        titleArray: [],
      };
    }
    this.titlelist = [...new Set([...animelist])];
    this.getAnimeByMonth(cmonth, cyear);

    //console.log("getLocalAnimelist is ", animelist);
    return true;
  };
}

const animeAPI = new AnimeAPI();
export default animeAPI;
