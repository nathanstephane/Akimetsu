import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Form = () => {
    const[animesData, setAnimesData] = useState([]);

    useEffect(() => {
        axios.get('https://kitsu.io/api/edge/anime').then((res)=>setAnimesData(res.data.data ));
    }, []);
    
    return (
        <div className="form-component">
            <div className="form-container">
                <form > 
                    <input type="text" placeholder='Enter an anime title' id="search-input" />
                    <input type="submit" value="Search" />
                </form>
                  <div className="btn-sort-container">
                    <div className="btn-sort" id='goodToBad'>
                        Top <span>↗</span>
                    </div>
                    <div className="btn-sort" id="badToGood">
                        Down <span>↘</span>
                    </div>
                  </div>
            </div>

            <div className="result">
                {animesData.slice(0,12).map((anime) => (<Card key={anime.id} anime={anime} />))}
            </div>
        </div>
    );
};

export default Form;