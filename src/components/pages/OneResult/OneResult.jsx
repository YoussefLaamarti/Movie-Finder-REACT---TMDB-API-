import React from "react";
import Header from "../../layout/Header";
function OneResult({ OneMovie }) {
  const Img_url = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div>
        <div className="oneResult-content">
          {" "}
          <div className="movie-infos"></div>
        </div>
      </div>
    </>
  );
}

export default OneResult;
