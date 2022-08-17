import React from "react";
function Navbar({ setGenre }) {
  const handleClick = (e) => {
    setGenre(e);
  };
  return (
    <section className="Navbar">
      <ul>
        <li>
          <a href="/"> HOME</a>
        </li>
        <li>
          <a onClick={() => handleClick("&with_genres=28")}>ACTION MOVIES</a>
        </li>
        <li>
          <a onClick={() => handleClick("&with_genres=12")}>
            {" "}
            ADVENTURE MOVIES
          </a>
        </li>
        <li>
          <a onClick={() => handleClick("&with_genres=878")}>
            {" "}
            SCIENCE FICTION MOVIES
          </a>
        </li>
        <li>
          <a onClick={() => handleClick("&with_genres=35")}> COMEDY MOVIES</a>
        </li>
        <li>
          <a onClick={() => handleClick("&with_genres=80")}> CRIME MOVIES</a>
        </li>

        <li>
          <a onClick={() => handleClick("&with_genres=27")}> HORROR MOVIES</a>
        </li>
        <li>
          <a onClick={() => handleClick("&with_genres=9648")}>
            {" "}
            MYSTERY MOVIES
          </a>
        </li>
        <li>
          <a onClick={() => handleClick("&with_genres=53")}> THRILLER MOVIES</a>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
