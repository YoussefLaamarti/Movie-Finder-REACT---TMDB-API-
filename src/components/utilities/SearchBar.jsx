import React, { useState } from "react";

function SearchBar({ setSearchResult }) {
  const [searchTerm, setSearchTerm] = useState("");
  //on Change for the search Form
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  //on submit to the Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResult(searchTerm);
  };
  return (
    <div>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            className="searchbar"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="   Search for a Movie"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
