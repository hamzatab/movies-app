import React from "react";
import Movie from "./interfaces/Movie"

export const MoviesContext = React.createContext<{ movies: Movie[], updateMovies: Function}>({
  movies: [],
  updateMovies: Function,
});
