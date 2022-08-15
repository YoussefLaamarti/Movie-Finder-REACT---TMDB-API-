import React from "react";
import { Link } from "react-router-dom";

const Img_url = "https://image.tmdb.org/t/p/original";
function Row({ title, object, setOneMovie }) {
  const handleClick = (movie) => {
    setOneMovie(movie);
    console.log(movie);
  };
  return (
    <div>
      <h1> {title}</h1>
      <div className="row-flex">
        {object
          .filter(
            (object) => object.poster_path !== null && object.overview !== ""
          )
          .map((movie) => (
            <div className="row-movies">
              {movie.poster_path === null ? (
                <></>
              ) : (
                <Link to="/movie">
                  <img
                    key={movie.id}
                    className="card"
                    src={`${Img_url}${movie.poster_path}`}
                    alt="image"
                    onClick={() => handleClick(movie)}
                  />
                </Link>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Row;
