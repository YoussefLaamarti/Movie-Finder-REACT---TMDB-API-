import axios from "axios";
import React, { useEffect, useState } from "react";
import req from "../../../requests";
import SearchBar from "../../utilities/SearchBar";
import Header from "../../layout/Header";
import Rows from "../../utilities/Rows";
import Results from "../Results/Results";
function Home({ setOneMovie }) {
  //useEffect whenever the page load this method run
  useEffect(() => {
    fetchPopular();
    fetchHighest();
  }, []);
  //base url for images

  //base api url
  const Base_url = "https://api.themoviedb.org/3";
  //states
  const [popular, setPopular] = useState([]);
  const [highestRating, sethighestRating] = useState([]);
  const [SearchResult, setSearchResult] = useState("");

  //function that fetch data from the api

  const fetchPopular = async () => {
    const response = await axios.get(` ${Base_url}${req.fetchPopularMovies}`);
    setPopular(response.data.results);
  };
  //function that fetch data from the api
  const fetchHighest = async () => {
    const response = await axios.get(` ${Base_url}${req.fetchHighestRating}`);
    sethighestRating(response.data.results);
  };
  //this function if a search term is stored it will return resutls for it
  var Searching;
  if (SearchResult == "") {
    Searching = <Rows popular={popular} highestRating={highestRating} />;
  } else {
    Searching = (
      <Results
        SearchResult={SearchResult}
        Base_url={Base_url}
        setOneMovie={setOneMovie}
      />
    );
  }

  return (
    <div>
      {/* the header */}
      <Header />

      {/* Hoome Content */}
      <section className="Container-home-rows">
        <div className="row-container">
          <SearchBar setSearchResult={setSearchResult} />
          {Searching}
        </div>
      </section>
    </div>
  );
}

export default Home;
