import { Schema, model } from "mongoose";

export const directorSchema = new Schema({
    firstName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: [true, "First name is required."]
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: [true, "Last name is required."]
    },
    birthYear: {
        type: Number,
        required: [true, "Birth year is required."]
    }
});

// If we uncomment this line it will create a new collection in the database
export const Director = model("director", directorSchema, "directors");