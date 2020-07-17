import {month} from "./Date";

//const API = "https://api.jikan.moe/v3/";
const API = process.env.REACT_APP_API;
const PROXY = "";

/*const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};*/

class AnimeAPI {
  titlelist = [];
  animecontroller = new AbortController();

  animeScissors = async (cyear, season, cmonth) => {
    //console.log(`${API}season/${year}/${season}/`);
    let animeJSON = await this.getSeason(cyear, season);
    //console.log(animeJSON);
    //let result = await getAnimelist(animeJSON);
    return await this.getAnimelist(animeJSON, cmonth, cyear);
  };

  getSeason = async (cyear, season) => {
    //setTimeout(() => this.animecontroller.abort(), 10000);
    const signal = this.animecontroller.signal;

    try {
      const response = await fetch(`${PROXY}${API}season/${cyear}/${season}/`, {
        signal,
      }).then((res) => {
        if (res.status === 429) {
          console.log("Too many requests!");
        }
        if (!res.ok) {
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
        image: animelist[el].image_url,
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

  sortAnime = (sortBy) => {
    //console.log('sort has started!', titlelist);
    if (sortBy === undefined) sortBy = 3;
    let animelist = [...this.titlelist];

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

    this.titlelist = [...animelist];
    //console.log("sort is finished!", titlelist);
  };

  getAnimeByMonth = (cmonth, cyear) => {
    //console.log("getAnimeByMonth: ", cmonth, cyear);
    this.sortAnime(1);
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

    //console.log("animelist after gabm is", newlist);
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
    /*console.log(
                      "Filled list is ",
                      animelist
                    );*/
    return animelist;
  };
}

const animeAPI = new AnimeAPI();

export default animeAPI;
