import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Form = () => {
  const [animesData, setAnimesData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortGoodBad, setSortGoodBad] = useState("badToGood");

  useEffect(() => {
    if (search) {
      axios
        .get(`https://kitsu.io/api/edge/anime?filter[text]=${search}`)
        .then((res) => setAnimesData(res.data.data));
    } else {
      axios
        .get(`https://kitsu.io/api/edge/anime`)
        .then((res) => setAnimesData(res.data.data));
    }
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Enter an anime title"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top <span>↗</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Worst <span>↘</span>
          </div>
        </div>
      </div>

      <div className="result">
        {animesData
          .slice(0, 10)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.attributes.averageRating - a.attributes.averageRating;
            } else if (sortGoodBad === "badToGood") {
              return a.attributes.averageRating - b.attributes.averageRating;
            }
          })
          .map((anime) => (
            <Card key={anime.id} anime={anime} />
          ))}
      </div>
    </div>
  );
};

export default Form;
