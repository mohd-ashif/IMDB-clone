import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./component/header/Header"
import Home from './component/pages/home/Home';
import { Card } from 'react-bootstrap';
import MovieList from './component/moviList/MovieList';
import Movie from './component/pages/movieDetails/Movie';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/.id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
