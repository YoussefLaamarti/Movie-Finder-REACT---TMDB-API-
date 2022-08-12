import axios from 'axios';
import React , {useEffect,useState} from 'react'
import req  from '../../../requests'



function Home() {
  
  useEffect(() => {
    fetchPopular();
    fetchHighest();
  },[]);
  const Img_url ='https://image.tmdb.org/t/p/original';

  const [popular,setPopular] = useState([]);
  const [highestRating,sethighestRating] = useState([]);

  const fetchPopular = async () => {
    const response = await  axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d92df06e8d58a85b55771aa53444735e')
      setPopular(response.data.results);
    }
    const fetchHighest = async () => {
      const response = await  axios.get('https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=d92df06e8d58a85b55771aa53444735e')
        console.log(response.data.results);
        sethighestRating(response.data.results);
      }

    
  return (
    <div> 
        <section  className='Container-home-header'>

            <div className='paper'>           
        <h1>MOVIE FINDER</h1>    
            <div className='paper-flex'>
                <div className='triangle' ></div>
                <div className='triangle' id='right'></div>

                </div>
            </div>
    
    </section>
    <section  className='Container-home-rows'>
      <div className='row-container'>
        <h1> Popular Movies</h1>
        <div className='row-flex'>
        {popular.map((movie) => (
        <div className='row'><img  key={movie.id} className='test'src={` ${Img_url}${movie.poster_path}`} alt="image"/></div>
      ))}
  
 
        </div>
      </div>
             
            
     
   
    
      <div className='row-container'>
        <h1> Highest Rating Movies</h1>
        <div className='row-flex'>
        {highestRating.map((movie) => (
        <div className='row'><img className='test'src={` ${Img_url}${movie.poster_path}`} alt="image"/></div>
      ))}
   
   
 
        </div>
      </div>
             
            
     
     </section>
    </div>
  )
}

export default Home