import React from "react";
import Row from "./Row";

function Rows({ highestRating, popular }) {
  return (
    <>
      <div className="row">
        <Row title={"Popular Movies"} object={popular} />
      </div>
      <div className="row">
        <Row title={"Highest Rating Movies"} object={highestRating} />
      </div>
    </>
  );
}

export default Rows;
