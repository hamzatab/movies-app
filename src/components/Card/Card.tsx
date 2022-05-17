
import Movie from "../../interfaces/Movie";
import "./Card.css"


export const Card = (movie: Movie) => {

  return (
    <div className="card" key={movie.id}>
       <div className="cardHeader">
        <div className="cardHeaderName">
          {movie.name} ({new Date(movie.releaseDate).getFullYear()})
        </div>
        <div className="cardHeaderRating">{movie.rate}</div>
      </div>
      <div className="cardImage">
        <img src={movie.poster} alt={movie.name} />
        <div className="cardOverview">{movie.overview}</div>
      </div>
     
    </div>
  );
};
