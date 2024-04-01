import { Schema } from "mongoose";

export const reviewSchema = new Schema({
    review: {
        type: String,
        minLength: 20,
        maxLength: 800,
    },
});