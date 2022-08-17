import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Img_url = "https://image.tmdb.org/t/p/original";
function Row({ title, object, setOneMovie }) {
  const handleClick = (movie) => {
    setOneMovie(movie);
  };

  const RowRef = useRef();
  const [SliderAdd, setSliderAdd] = useState("0");

  const MoveRight = (b) => {
    if (SliderAdd < 3210) {
      const translateX = parseInt(b) + 1070;
      setSliderAdd(translateX);
      RowRef.current.style.transform = "translateX(-" + translateX + "px)";
    }
  };
  const MoveLeft = (b) => {
    if (SliderAdd > 0) {
      const translateX = "0";
      setSliderAdd(translateX);
      RowRef.current.style.transform = "translateX(" + translateX + "px)";
      console.log("done");
    }
  };
  return (
    <div>
      <div className="Sliderrr-container">
        {SliderAdd > 0 && (
          <div className="Sliderrr" onClick={() => MoveLeft(SliderAdd)}>
            ❮
          </div>
        )}
        {SliderAdd < 3210 && (
          <div className="Sliderrr" onClick={() => MoveRight(SliderAdd)}>
            ❯
          </div>
        )}
      </div>
      <h1> {title}</h1>

      <div ref={RowRef} className="row-flex">
        {object
          .filter(
            (object) => object.poster_path !== null && object.overview !== ""
          )
          .map((movie) => (
            <div className="row-movies">
              {movie.poster_path === null ? (
                <></>
              ) : (
                <div>
                  <Link to="/movie">
                    <img
                      key={movie.id}
                      className="card"
                      src={`${Img_url}${movie.poster_path}`}
                      alt="image"
                      onClick={() => handleClick(movie)}
                    />
                  </Link>
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
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Row;
