import { Movie } from "./Movie";

export class OmdbResponse {
    constructor(amount, movies) {
        this.amount = amount;
        this.movies = movies.map((movie) => {
            return new Movie(movie.Title, movie.Year, movie.Poster, movie.Type);
        });
    }
}