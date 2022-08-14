import React from "react";

function Header() {
  return (
    <section className="Container-home-header">
      <div className="paper">
        <h1>MOVIE FINDER</h1>
        <div className="paper-flex">
          <div className="triangle"></div>
          <div className="triangle" id="right"></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
