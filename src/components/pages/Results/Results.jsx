import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import requests from "../../../requests";

function Results({ SearchResult, Base_url, setOneMovie }) {
  const [foundMovie, setFoundMovie] = useState([]);

  const Img_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    fetchMovie();
  }, [SearchResult]);

  const fetchMovie = async () => {
    const response = await axios.get(
      ` ${Base_url}${requests.fetchMovie}${SearchResult}`
    );
    setFoundMovie(response.data.results);
  };
  const handleClick = (movie) => {
    setOneMovie(movie);
  };
  return (
    <div className="row-result">
      {foundMovie
        .filter(
          (foundMovie) =>
            foundMovie.poster_path !== null && foundMovie.overview !== ""
        )
        .map((movie) => (
          <div className="row-movies">
            <Link to="/movie">
              <img
                key={movie.id}
                className="card"
                src={`${Img_url}${movie.poster_path}`}
                alt="image"
                onClick={() => handleClick(movie)}
              />
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Results;
