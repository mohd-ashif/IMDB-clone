import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [MoviesList, setMoviesList] = useState([])
  const { type } = useParams();

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMoviesList(data.results))
  }

  useEffect(() => {
    getData()
  });

  useEffect(() => {
    getData()
  }, [type])
  

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {MoviesList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      
    </div>
  );
}

export default MovieList;
