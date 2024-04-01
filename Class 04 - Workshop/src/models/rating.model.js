import { Schema } from "mongoose";

export const ratingSchema = new Schema({
    review: {
        type: Number,
        min: 1,
        max: 5,
    },
});