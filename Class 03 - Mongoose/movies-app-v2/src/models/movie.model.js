import { Schema, model } from "mongoose";
import { genres } from "../util/constants.js";
import { directorSchema } from "./director.model.js";

const movieSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: [true, "Name is required."]
    },
    genre: {
        type: [String],
        enum: genres,
        required: [true, "Genre is required."]
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: "director",
    },
    year: {
        type: Number,
        required: [true, "Year is required."]
    },
    description: {
        type: String,
        minLength: 20,
        maxLength: 300,
        required: [true, "Description is required."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: [true, "Rating is required."]
    },
});

const Movie = model("movie", movieSchema, "movies");

export default Movie;