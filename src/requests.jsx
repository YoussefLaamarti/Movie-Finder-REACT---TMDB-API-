const APIKEY = "d92df06e8d58a85b55771aa53444735e";
const requests = {


    fetchPopularMovies: `/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`,
    fetchHighestRating: `/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${APIKEY}`,


}

export default requests;