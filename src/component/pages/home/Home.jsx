import React, { useEffect, useState } from 'react';
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../moviList/MovieList';
import Footer from '../footer/Footer';


const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className='poster'>
        {popularMovies.length > 0 ? (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={400}
            infiniteLoop={true}
            showStatus={false}  
          >


            {popularMovies.map((movie) => (
              <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
              <div  key={movie.id}  className='posterImage'>
                
               <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt='' />
              </div>
               <div className="posterImage__overlay">

                <div className="posterImage__title"> {movie ? movie.original_title:""}</div>

                <div className="posterImage__language">
                  {movie ?  movie.original_language : ""}

                <div className="posterImage__runtime">
                  {movie ? movie.release_date: ""}
                  
                  <span className="posterImage__rating">
                    <i className='fas fa-star' />{" "}
                  </span>
                  </div>
                </div>
                <div className="posterImage__description">{movie ? movie.overview: " "}</div>
               </div>

               </Link>
            ))}
        

          </Carousel>
        ) : (
          <p>Loading...</p>
        )}

        <MovieList />
        <Footer />

       
      </div>
    </>
  );
};

export default Home;
