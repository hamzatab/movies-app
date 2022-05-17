import { useState, useEffect } from 'react';
import { getMovies } from './api/moviesApi';
import './App.css';
import Params from "./interfaces/Params"
import Movie from "./interfaces/Movie"
import { MoviesContext } from "./context";
import { Movies } from './components/Movies/Movies';

function App() {

  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
   
    const params: Params = {
      language: "en-US",
      sortBy: "popularity.desc",
      page: 1,
      timezone: "America/New_York"
    }
    try {
      const movies = await getMovies(params)
      setMovies(movies)
    }
    catch (error) {
      setMovies([])
      console.error(error)
    }

  }
  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <MoviesContext.Provider value={{ movies, updateMovies: setMovies }}>
      <div className="App">
        <Movies />
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
