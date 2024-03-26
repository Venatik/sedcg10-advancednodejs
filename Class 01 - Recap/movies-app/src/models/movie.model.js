import DataService from "../services/data.service.js";
import { createPath } from "../utils/utils.js";
import Movie from "../entities/movie.entity.js";

const moviesPath = createPath(["..", "db", "movies.json"]);
console.log("MOVIES PATH:", moviesPath);

export default class MovieModel {
    static async getAll() {
        return await DataService.readData(moviesPath);
    }

    static async getById(id) {
        const movies = await DataService.readData(moviesPath);
        const foundMovie = movies.find((movie) => movie.id === id);
        if (!foundMovie) {
            throw new Error("Movie not found");
        }
        return foundMovie;
    }

    static async create(movieData) {
        const movies = await this.getAll();
        const { name, genre, director, year, description, rating } = movieData;
        const movie = new Movie(name, genre, director, year, description, rating);
        movies.push(movie);
        await DataService.writeData(moviesPath, movies);
        return movie;
    }

    static async update(id, movieData) {
        const movies = await this.getAll();
        const movieIndex = movies.findIndex(movie => movie.id === id);
        if (movieIndex < 0) {
            throw new Error("Movie not found");
        }
        const updatedMovie = {
            id,
            ...movies[movieIndex],
            ...movieData,
        }
        movies[movieIndex] = updatedMovie;
        await DataService.writeData(moviesPath, movies);
        return movies[movieIndex];
    }

    static async delete(id) {
        const movies = await this.getAll();
        const filteredMovies = movies.filter(movie => movie.id !== id);
        if (filteredMovies.length === movies.length) {
            throw new Error("Movie not found.");
        }
        await DataService.writeData(moviesPath, filteredMovies);
    }
}