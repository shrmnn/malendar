const API = 'https://private-anon-98ba329006-jikan.apiary-proxy.com/v3/';

export let titlelist = [];

const getSeason = async (year, season) => {
    const response = await fetch(`${API}season/${year}/${season}/`)
        //const response = await fetch(`${API}season/`)
        .then(res => {
                //console.log(res);
                if (res.status === 429) {
                    console.log('Too many requests!');
                }
                //console.log('response is ', res);
                if (!res.ok) {
                    console.error("Could not fetch!");
                }
                return res;
            }
        );
    //.catch(error => console.error('error blin'));

    const resJSON = await response.json();
    return resJSON['anime'];
}
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
        animelist[el] =
            {
                id: animelist[el].mal_id,
                title: animelist[el].title,
                airing: animelist[el].airing_start,
                image: animelist[el].image_url,
                studio: animelist[el].producers[0],
            };
    }
    ;
    titlelist = animelist;
    sortAnime();
    getAnimeByMonth(month, year);

    //console.log(titlelist);
    return true;
}

const sortAnime = () => {
    //console.log('sort has started!', titlelist);
    let animelist = [...titlelist];

    animelist.sort((a, b) => {
        if (a.airing > b.airing) {
            return 1;
        } else if (a.airing < b.airing) {
            return -1;
        } else return 0;
    })

    titlelist = [...animelist];
    //console.log('sort is finished!', titlelist);
}

const getAnimeByMonth = (month, year) => {
    let animelist = [...titlelist];
    let newlist = [];
    newlist.length = new Date(year, new Date(`01 ${month} ${year}`).getMonth() + 1, 0).getDate();
    newlist = fillNewList(newlist, month, year);
    console.log('newlist is', newlist);

    animelist.forEach((a, index) => {
            if ((new Date(a.airing).getTime() <= new Date(`31 ${month} ${year}`).getTime()
                && new Date(a.airing).getTime() >= new Date(`01 ${month} ${year}`).getTime())) {
                //console.log(a, 'a.airing is true');
                a.day = new Date(a.airing).getDate()
                newlist[a.day - 1] = a;
                return true;
            }
            return false;
        }
    );

    console.log('animelist after gabm is', newlist);
    titlelist = [...newlist];

}

const fillNewList = (newlist, month, year) => {
    let dumbTitle = {
        id: '',
        title: '',
        airing: '',
        image: '',
        studio: {name: ''},
    }

    let animelist = [...newlist];
    let lastDayOfMonth = new Date(year, new Date(`01 ${month} ${year}`).getMonth() + 1, 0).getDate();
    animelist.fill(dumbTitle, 0, lastDayOfMonth);
    console.log('Filled list is ', animelist, '\nlast day of month is ', lastDayOfMonth);
    return animelist;
}

const animeScissors = async (year, season, month) => {
    console.log(`${API}season/${year}/${season}/`);
    const animeJSON = await getSeason(year, season);
    //console.log(animeJSON);
    //let result = await getAnimelist(animeJSON);
    return (await getAnimelist(animeJSON, month, year));
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default animeScissors;