import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import requests from "../../../requests";
import { toast } from "react-toastify";

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
    if (response.data.total_pages > 0) {
      setFoundMovie(response.data.results);
    } else {
      toast.error("Movie not Found !");
      //setting the movies to empty
      setFoundMovie([]);
    }
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
            <div className="title-date">
              <a
                href="/movie"
                onClick={() => handleClick(movie)}
                className="row-movies-title"
              >
                {movie.original_title} &nbsp;
              </a>
              <a
                href="/movie"
                onClick={() => handleClick(movie)}
                className="date"
              >
                {movie.release_date.slice(0, 4)}
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Results;
