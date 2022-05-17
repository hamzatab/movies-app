export default interface Movie {
    id: number;
    releaseDate: string;
    name: string;
    rate: number;
    overview: string;
    poster?: string;
    language: string;
}
