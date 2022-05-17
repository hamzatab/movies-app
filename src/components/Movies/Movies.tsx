
import { useContext } from "react";
import { Card } from "../Card/Card";
import { MoviesContext } from "../../context";
import "./Movies.css";

export const Movies = () => {
    const { movies } = useContext(MoviesContext);

    return (
        <div className="catalogContainer">
            {movies.map((movie) => (
                <Card key={movie.id} {...movie} />
            ))}
        </div>
    );
};
