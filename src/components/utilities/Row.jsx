import React from "react";
const Img_url = "https://image.tmdb.org/t/p/original";
function Row({ title, object }) {
  return (
    <div>
      <h1> {title}</h1>
      <div className="row-flex">
        {object.map((movie) => (
          <div className="row-movies">
            <img
              key={movie.id}
              className="test"
              src={`${Img_url}${movie.poster_path}`}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
