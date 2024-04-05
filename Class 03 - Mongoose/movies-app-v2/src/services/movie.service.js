import Movie from "../models/movie.model.js";

// responsible for communicating with the DB and making CRUD operations
export default class MovieService {
    static async getAll() {
        const data = Movie.find({}).populate("director");
        console.log(data);
        return data;
    }

    static async getById(id) {
        const movie = Movie.findById(id);
        console.log(movie);
        return movie;
    }

    static async create(body) {
        // const movie = new Movie(body);
        // return await movie.save();

        // More valid approach and more mongoose-like. Creates the Movie object in the background without explicitly instantiating a new Movie model
        return await Movie.create(body);
    }

    static async update(id, body) {
        // the {new: true} flag returns the updated document. It bypasses all validation.
        // return Movie.findByIdAndUpdate(id, body, {
        //     new: true
        // });

        // This method runs the validators. It is the recommended way to update a document.
        let movie = await Movie.findById(id);
        const updatedData = { ...movie, ...body };
        movie.set(updatedData);
        await movie.save();
        return movie;
    }

    static async delete(id) {
        return Movie.findByIdAndDelete(id);
    }
}
