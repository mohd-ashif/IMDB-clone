import React, { useEffect , useState } from 'react'

const Home = () => {

    const [popularMovies,setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
          .then((res) => res.json())
          .then((data) => setPopularMovies(data.results))


      }, []);
       
  return (
    <>
    <div> 
        <h1>Home Page</h1>
    </div>
    </>
  )
}

export default Home