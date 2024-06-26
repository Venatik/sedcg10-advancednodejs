import MovieModel from "../models/movie.model.js";

export default class MovieController {
    static async getMovies(req, res) {
        try {
            const movies = await MovieModel.getAll();
            res.send(movies);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getMovie(req, res) {
        try {
            const movieId = req.params.id;
            const movie = await MovieModel.getById(movieId);
            res.send(movie);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async createMovie(req, res) {
        try {
            const movieBody = req.body;
            const movie = await MovieModel.create(movieBody);
            res.status(201).send(movie);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async updateMovie(req, res) {
        try {
            const movieBody = req.body;
            const movieId = req.params.id;
            const movie = await MovieModel.update(movieId, movieBody);
            res.send(movie);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async replaceMovie(req, res) {
        try {
            const movieBody = req.body;
            const movieId = req.params.id;
            const movie = await MovieModel.replace(movieId, movieBody);
            res.send(movie);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async deleteMovie(req, res) {
        try {
            const movieId = req.params.id;
            await MovieModel.delete(movieId);
            res.status(200).send({ message: "Movie deleted." });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}