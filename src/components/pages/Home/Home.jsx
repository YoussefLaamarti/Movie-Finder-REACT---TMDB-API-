import axios from "axios";
import React, { useEffect, useState } from "react";
import req from "../../../requests";
import SearchBar from "../../utilities/SearchBar";
import Header from "../../layout/Header";
import Rows from "../../utilities/Rows";
import Results from "../Results/Results";
import MovieFilter from "../../utilities/MovieFilter";
import Navbar from "../../layout/Navbar";
import FilterResults from "../Results/FilterResults";
function Home({ setOneMovie }) {
  //useEffect whenever the page load this method run
  useEffect(() => {
    fetchPopular();
    fetchHighest();
    fetchDayTrending();
    fetchWeekTrending();
  }, []);
  //base url for images

  //base api url
  const Base_url = "https://api.themoviedb.org/3";
  //states
  const [popular, setPopular] = useState([]);
  const [highestRating, sethighestRating] = useState([]);
  const [dayTrend, setDayTrend] = useState([]);
  const [WeekTrend, setWeekTrend] = useState([]);

  const [SearchResult, setSearchResult] = useState("");
  const [Genre, setGenre] = useState("");

  const [Year, setYear] = useState("");

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
  const fetchDayTrending = async () => {
    const response = await axios.get(` ${Base_url}${req.fetchDayTrending}`);
    setDayTrend(response.data.results);
  };
  const fetchWeekTrending = async () => {
    const response = await axios.get(` ${Base_url}${req.fetchWeekTrending}`);
    setWeekTrend(response.data.results);
  };
  //this function if a search term is stored it will return resutls for it
  var Searching;
  if (SearchResult == "" && Genre == "" && Year == "") {
    Searching = (
      <Rows
        popular={popular}
        highestRating={highestRating}
        dayTrend={dayTrend}
        WeekTrend={WeekTrend}
        setOneMovie={setOneMovie}
      />
    );
  } else if (SearchResult != "") {
    Searching = (
      <Results
        SearchResult={SearchResult}
        Base_url={Base_url}
        setOneMovie={setOneMovie}
      />
    );
  } else if (Genre != "" || Year != "") {
    Searching = (
      <FilterResults
        Genre={Genre}
        Year={Year}
        Base_url={Base_url}
        setOneMovie={setOneMovie}
      />
    );
  }

  return (
    <div>
      {/* the header */}
      <Navbar setGenre={setGenre} />
      <Header />

      {/* Hoome Content */}
      <section className="Container-home-rows">
        <div className="row-container">
          <div className="searchbar-container">
            <SearchBar setSearchResult={setSearchResult} />
            <MovieFilter setGenre={setGenre} setYear={setYear} />
          </div>
          {Searching}
        </div>
      </section>
    </div>
  );
}

export default Home;
