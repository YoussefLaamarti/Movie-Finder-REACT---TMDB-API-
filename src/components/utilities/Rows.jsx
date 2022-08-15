import React from "react";
import Row from "./Row";

function Rows({ highestRating, popular, setOneMovie }) {
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
    </>
  );
}

export default Rows;
