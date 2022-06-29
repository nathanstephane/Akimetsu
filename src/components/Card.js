import React from 'react';

const Card = ({anime}) => {
    return (
        <div className="card">
            <img src={"https://media.kitsu.io/anime/poster_images/"+anime.id+"/medium.jpg"} alt=""/>
            <h2>{anime.attributes.canonicalTitle}</h2>
        </div>
    );
};

export default Card;