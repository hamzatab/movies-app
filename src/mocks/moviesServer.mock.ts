import { rest } from "msw";
import moviesList from "./data/movies-service/moviesList.json"



export const moviesService = [
    rest.get("https://api.themoviedb.org/3/discover/tv",
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(moviesList))
        })
]