import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/singleMovie.css";

export const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);

  function fetchData() {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=b60f577d`)
      .then((res) => {
        setData(res.data);
      });
  }

  console.log(Data);

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <div className="plot">
          <p>Movie Plot: <span>{Data.Plot}</span></p>
      </div>
      <div className="movieCard">
        <div className="movieDiv"> 
          <img src={Data.Poster} alt="image not found" />
        </div>
        <div className="movieDetail">
          <p>Director: {Data.Director}</p>
          <p>Cast: {Data.Actors}</p>
          <p>Genre: {Data.Genre}</p>
          <p>Language: {Data.Language}</p>
          <p>Runtime: {Data.Runtime}</p>
          <p>Release Date: {Data.Released}</p>
          <p>imdbRating: {Data.imdbRating}</p>
          <p>imdbVotes: {Data.imdbVotes}</p>
        </div>
      </div>
    </div>
  );
};
