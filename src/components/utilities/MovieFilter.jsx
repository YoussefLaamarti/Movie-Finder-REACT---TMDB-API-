import React, { useEffect, useState } from "react";
import requests from "../../requests";
import axios from "axios";
import "../../css/Moviefilter.css";

function MovieFilter({ setGenre, setYear }) {
  useEffect(() => {
    fetchGenres();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setGenre(localGenre);
    setYear(localYear);
  };
  const handleChangeGenre = (event) => {
    setLocalGenre(event.target.value);
  };
  const handleChangeDate = (event) => {
    setLocalYear(event.target.value);
  };
  const [localYear, setLocalYear] = useState("");
  const [localGenre, setLocalGenre] = useState("");
  const [Genres, setGenres] = useState([]);
  const Base_url = "https://api.themoviedb.org/3";
  const fetchGenres = async () => {
    const response = await axios.get(` ${Base_url}${requests.fetchAllGenres}`);

    setGenres(response.data.genres);
  };
  return (
    <>
      <div className="movie-filter-container">
        <form>
          <select onChange={handleChangeGenre} className="moviefilter-select">
            <option value="">Genres</option>
            {Genres.map((movie) => (
              <option value={"&with_genres=" + movie.id}>{movie.name}</option>
            ))}
          </select>
          <select onChange={handleChangeDate} className="moviefilter-select">
            <option value="">Year</option>
            <option value="&primary_release_year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022">
              2000 and above
            </option>
            <option value="&primary_release_year=2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022">
              2010 and above
            </option>
            <option value="&primary_release_year=2011">2011 </option>
            <option value="&primary_release_year=2012">2012 </option>
            <option value="&primary_release_year=2013">2013 </option>
            <option value="&primary_release_year=2014">2014 </option>
            <option value="&primary_release_year=2015">2015 </option>
            <option value="&primary_release_year=2016">2016 </option>
            <option value="&primary_release_year=2017">2017 </option>
            <option value="&primary_release_year=2018">2018 </option>
            <option value="&primary_release_year=2019">2019 </option>
            <option value="&primary_release_year=2020">2020 </option>
            <option value="&primary_release_year=2021">2021 </option>
            <option value="&primary_release_year=2022">2022 </option>
          </select>
          <button onClick={handleClick} className="moviefilter-button">
            Filter
          </button>
        </form>
      </div>
    </>
  );
}

export default MovieFilter;
