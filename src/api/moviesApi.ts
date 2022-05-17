import Movie from "../interfaces/Movie"
import Params from "../interfaces/Params"

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY
const POSTER_BASE = "https://image.tmdb.org/t/p/w300"



export const getMovies = async ({ language, sortBy, page, timezone }: Params): Promise<Movie[]> => {
    const api = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=${language}&sort_by=${sortBy}&page=${page}&timezone=${timezone}`
    try {
        const response = await fetch(api);
        const { results } = await response.json();
        return mapMovies(results);
    } catch (error) {
        console.error(error)
        return [];
    }
}

const mapMovies = (res: any[]): Movie[] => {
    return res.map((movie) => {
        const {
            id,
            first_air_date,
            name,
            vote_average,
            overview,
            poster_path,
            original_language
        } = movie;

        return {
            id,
            releaseDate: first_air_date,
            name,
            rate: vote_average,
            overview,
            poster: `${POSTER_BASE}${poster_path}`,
            language: original_language,
        };
    });
}

