import React, {useEffect, useState} from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import "./Card.css";
import {Link} from "react-router-dom"


const Card = ({movie}) => {
    const [isLoading, setIsLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoding(false);
        },1500)
        
    },[])
  return (
    <>
    <div>
        {
            isLoading ?
            <div className="card">
                <skeletonTheme  color="#202020" highlightColor="#444">
                  <Skeleton height={300} duration={3} />
                </skeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards"> 
                    <img className='cards__img' src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path: ""}`} alt='' />
                    <div className="cards__overlay">
                    <div className="cards__title">{movie ? movie.original_title: ""}</div>
                    <div className="cards__runtime">
                        {movie ? movie.original_date: ""}
                        <span className="card__rating">{movie ? movie.vote_average : ""} <i className='fas fa-star'/></span>
                        </div>
                        <div className="cards__description">{movie ? movie.overview.slice(0,107)+"..." :  ""}</div>
                    </div>
                </div>

            </Link>
        }

    </div>
    </>
  )
}

export default Card