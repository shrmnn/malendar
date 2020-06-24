const api = 'https://private-anon-724800419f-jikan.apiary-proxy.com/v3/season/';

export let titlelist = [];

const getSeason = async () => {
    const response = await fetch(api);
    if (response.status === 429) {
        console.log('Too many requests!');
    }
    //console.log('response is ', response);

    if (!response.ok) {
        console.error("Could not fetch!");
    }
    const resJSON = await response.json();
    return resJSON['anime'];
}

const getAnimelist = (anime) => {
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

    //console.log(titlelist);
    return true;
}

const animeScissors = async () => {
    const animeJSON = await getSeason();
    return (await getAnimelist(animeJSON));
}

export default animeScissors;