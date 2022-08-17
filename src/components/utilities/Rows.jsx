import React from "react";
import Row from "./Row";

function Rows({ highestRating, popular, setOneMovie, dayTrend, WeekTrend }) {
  return (
    <>
      <div className="row">
        <Row
          title={"Popular Movies"}
          object={popular}
          setOneMovie={setOneMovie}
        />
      </div>
      <div className="row">
        <Row
          title={"Highest Rating Movies"}
          object={highestRating}
          setOneMovie={setOneMovie}
        />
      </div>
      <div className="row">
        <Row
          title={"Day Trending Movies"}
          object={dayTrend}
          setOneMovie={setOneMovie}
        />
      </div>
      <div className="row">
        <Row
          title={"Weekly Trending Movies"}
          object={WeekTrend}
          setOneMovie={setOneMovie}
        />
      </div>
    </>
  );
}

export default Rows;
