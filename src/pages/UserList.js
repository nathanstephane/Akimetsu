import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    let animesId = window.localStorage.animes
      ? window.localStorage.animes.split(",")
      : [];

      for(let i=0; i<animesId.length;i++){
            
          axios
          .get(`https://kitsu.io/api/edge/anime/${animesId[i]}`)
          .then((res) => setListData((listData) => [...listData, res.data.data]));
        
        }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Favorites 
      </h2>
      <div className="result">
               {listData.length >0 ? (listData.map((anime) => <Card key={anime.id} anime={anime}  />)) : (<h2>No favories animes yet.</h2>)}
      </div>
    </div>
  );
};

export default UserList;
