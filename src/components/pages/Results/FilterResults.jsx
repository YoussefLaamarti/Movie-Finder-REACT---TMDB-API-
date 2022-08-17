import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import requests from "../../../requests";

function FilterResults({ Genre, Year, Base_url, setOneMovie }) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [page, setpage] = useState("1");
  const pageParameter = "&page=";
  const [totalPages, setTotalPages] = useState([]);

  const Img_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    fetchMovies();
  }, [Genre, Year, page]);
  const fetchMovies = async () => {
    const response = await axios.get(
      ` ${Base_url}${requests.fetchThisGenre}${Genre}${Year}${pageParameter}${page}`
    );
    setTotalPages(response.data.total_pages);
    setFoundMovies(response.data.results);
  };
  const handleClick = (movie) => {
    setOneMovie(movie);
  };
  const handleClickMinus = (e) => {
    e.preventDefault();
    setpage(parseInt(page) - 1);
  };
  const handleClickPlus = (e) => {
    e.preventDefault();
    setpage(parseInt(page) + 1);
  };
  const handleChange = (event) => {
    setpage(event.target.value);
  };
  return (
    <div>
      <div className="pagination">
        <a href="/">HOME</a>

        {totalPages > "500" ? (
          <a>total pages : 500</a>
        ) : (
          <a>total pages : {totalPages}</a>
        )}
        {page > 1 && <a onClick={handleClickMinus}>❮</a>}
        <input
          className="pagination-text"
          placeholder={page}
          onChange={handleChange}
          type="text"
        />
        <a onClick={handleClickPlus}>❯</a>
      </div>
      <div className="row-result">
        {foundMovies
          .filter(
            (foundMovies) =>
              foundMovies.poster_path !== null && foundMovies.overview !== ""
          )
          .map((movie) => (
            <div className="row-movies filter-paddding">
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
    </div>
  );
}

export default FilterResults;
