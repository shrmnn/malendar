import React, {useEffect} from "react";
import "./container.css";
import Day from "./day";
import animeScissors, {titlelist} from "../api/getanime";

const Container = () => {

    useEffect(() => {
        (async function xd() {
                await animeScissors();
                console.log(titlelist);
                console.log('ók!');
            }
        )();
    }, []);


    const handleClick = () => {
        if (titlelist) {
            console.log('ok!');
        }
        ;

    }
    return (
        <main className='Container'>
            <div className='Head-Container'>
                <div className='Date-nav'>
                    <div className='dateMonth padding-left' onClick={handleClick}>June</div>
                    <div className='dateYear padding-right'>2020</div>
                </div>
                <div className='Release-nav'>
                    <div className='padding-left'>Ongoing</div>
                    <div className='padding-right active'>New releases</div>
                </div>
            </div>

            <div className='Days'>
                {Array(31).fill(1).map((el, i) =>
                    <Day id={(i + 1).toString().padStart(2, '0')} key={i} ani={titlelist[i]}/>
                )}

            </div>
        </main>
    );
}

export default Container;