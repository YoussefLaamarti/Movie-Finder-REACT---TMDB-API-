const APIKEY = "d92df06e8d58a85b55771aa53444735e";
const requests = {
  fetchPopularMovies: `/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`,
  fetchHighestRating: `/discover/movie/?certification_country=US&certification=R&api_key=${APIKEY}`,
  fetchDayTrending: `/trending/movie/day?api_key=${APIKEY}`,
  fetchWeekTrending: `/trending/movie/week?api_key=${APIKEY}`,
  fetchMovie: `/search/movie?api_key=${APIKEY}&query=`,
  fetchGenres: `/movie/500664?api_key=${APIKEY}`,
  fetchThisGenre: `/discover/movie?api_key=${APIKEY}`,
  fetchAllGenres: `/genre/movie/list?api_key=${APIKEY}`,
};

export default requests;
