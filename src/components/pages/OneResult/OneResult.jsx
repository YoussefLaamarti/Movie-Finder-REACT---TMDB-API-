import React, { useEffect, useState } from "react";
import axios from "axios";

function OneResult({ OneMovie }) {
  const Img_url = "https://image.tmdb.org/t/p/original";
  const Base_url = "https://api.themoviedb.org/3";
  const APIKEY = "d92df06e8d58a85b55771aa53444735e";

  useEffect(() => {
    fetchGenres();
    console.log(MovieGenres);
  }, []);
  const [MovieGenres, setMovieGenres] = useState([]);

  const fetchGenres = async () => {
    const response = await axios.get(
      ` ${Base_url}/movie/${OneMovie.id}?api_key=${APIKEY}`
    );

    setMovieGenres(response.data);
  };

  return (
    <>
      <div>
        <div className="oneResult-content">
          <img
            key={OneMovie.id}
            src={`${Img_url}${OneMovie.backdrop_path}`}
            alt="image"
          ></img>
          <div className="movie-infos">
            <section className="section4">
              <div className="movie-moreinfos">
                <span>Release Date : {MovieGenres.release_date}</span>
              </div>
              <div className="movie-moreinfos">
                <span>Budget : {MovieGenres.budget} $</span>
              </div>
              <div className="movie-moreinfos">
                <span>Revenue : {MovieGenres.revenue} $</span>
              </div>
              <div className="movie-moreinfos">
                <span>Status : {MovieGenres.status} </span>
              </div>
            </section>
            <section className="section1">
              <div className="movie-title">
                <span>{OneMovie.original_title}</span>
              </div>
            </section>

            <section className="section2">
              {Array.isArray(MovieGenres.genres)
                ? MovieGenres.genres.map((movie) => (
                    <div className="movie-genres">
                      <span key={movie.id}>{movie.name} </span>
                    </div>
                  ))
                : null}
              <div className="score-rating">
                <div className="movie-scores">
                  <span> Score {MovieGenres.vote_average}</span>
                </div>
                <div className="movie-scores">
                  <span>Vote : {MovieGenres.vote_count}</span>
                </div>
              </div>
            </section>

            <section className="section3">
              <div className="overview">
                <span>{MovieGenres.overview}</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneResult;
