const API = "https://private-anon-98ba329006-jikan.apiary-proxy.com/v3/";
//const API = "https://api.codetabs.com/v1/proxy?quest=https://api.jikan.moe/v3/";

export let titlelist = [];

const getSeason = async (year, season) => {
  const response = await fetch(`${API}season/${year}/${season}/`)
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
  //.catch(error => console.error('error blin'));

  const resJSON = await response.json();
  return resJSON["anime"];
};
/*let images = [];*/

/*const imageSaver = (image, el) => {
    images[el] = image;
    return images[el];
}*/
/*export const getLargeImages = async () => {
    console.log('getLargeImages started!')
    let animelist = [...titlelist];
    for (const el in animelist) {
        await sleep(500).then(async () => {
            getAnimeImage(animelist[el].id)
                .then(image => {
                    animelist[el]['image'] = imageSaver(image, el);
                    return image;
                });
        });
    };
    console.log('animelist in getLargeImages is ', animelist);
    titlelist = animelist;
    console.log(JSON.stringify(animelist) === JSON.stringify(titlelist));
    console.log('getLargeImages finished!')
    return titlelist;
}*/
/*const getAnimeImage = async (mal_id) => {
    const image_url = await fetch( `${API}anime/${mal_id}/pictures/`)
        .then(res => {
            return res.json();
        });
    const image = image_url.pictures[0]['large'];
    //console.log(image);
    return image;
}*/

const getAnimelist = (anime, month, year) => {
  let animelist = [];
  animelist.push(anime.map((el) => el));
  animelist = animelist[0];

  for (const el in animelist) {
    animelist[el] = {
      id: animelist[el].mal_id,
      title: animelist[el].title,
      airing: animelist[el].airing_start,
      image: animelist[el].image_url,
      studio: animelist[el].producers[0],
    };
  }
  titlelist = animelist;
  sortAnime();
  getAnimeByMonth(month, year);

  //console.log("getAnimelist is ", titlelist);
  return true;
};

const sortAnime = () => {
  //console.log('sort has started!', titlelist);
  let animelist = [...titlelist];

  animelist.sort((a, b) => {
    if (a.airing > b.airing) {
      return 1;
    } else if (a.airing < b.airing) {
      return -1;
    } else return 0;
  });

  titlelist = [...animelist];
  //console.log('sort is finished!', titlelist);
};

export const getLastDayOfMonth = (month, year) => {
  return new Date(
      year,
      new Date(`01 ${month} ${year}`).getMonth() + 1,
      0
  ).getDate();
};

const getAnimeByMonth = (month, year) => {
  let animelist = [...titlelist];
  let newlist = [];
  //newlist.length = getLastDayOfMonth(month, year);
  newlist.length = 35;
  newlist = fillNewList(newlist, month, year);
  //console.log("newlist is", newlist);

  let firstDayOfMonth = new Date(`01 ${month} ${year}`).getTime();
  let lastDayOfMonth = new Date(
      `${getLastDayOfMonth(month, year)} ${month} ${year}`
  ).getTime();

  animelist.forEach((a, index) => {
    let currentDate = new Date(a.airing).getTime();

    if (currentDate <= lastDayOfMonth && currentDate >= firstDayOfMonth) {
      //console.log(firstDayOfMonth, currentDate, lastDayOfMonth);
      //console.log(a, "a.airing is true");
      a.day = new Date(a.airing).getDate() + 1;
      newlist[a.day - 1] = a;
      return true;
    }
    return false;
  });

  //console.log("animelist after gabm is", newlist);
  titlelist = [...newlist];
};

const fillNewList = (newlist, month, year) => {
  let dumbTitle = {
    id: "",
    title: "",
    airing: "",
    image: "",
    studio: {name: ""},
  };

  let animelist = [...newlist];
  animelist.fill(dumbTitle, 0, animelist.length);
  /*console.log(
    "Filled list is ",
    animelist
  );*/
  return animelist;
};

const animeScissors = async (year, season, month) => {
  //console.log(`${API}season/${year}/${season}/`);
  let animeJSON = await getSeason(year, season);
  //console.log(animeJSON);
  //let result = await getAnimelist(animeJSON);
  return await getAnimelist(animeJSON, month, year);
};

/*const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};*/

export default animeScissors;
