import { Schema, model } from "mongoose";

// Sub-schema
const addressSchema = new Schema({
    street: String,
    city: String,
})

const userSchema = new Schema({
    // name: String 
    name: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
    },
    age: {
        type: Number,
        minLength: 1,
        maxLength: 100,
    },
    email: {
        type: String,
        lowercase: true,
        // uppercase: true
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        minLength: 5,
        maxLength: 18,
        required: [true, "Password is required"],
    },
    // address: {
    //     street: String,
    //     city: String,
    // }
    address: addressSchema,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
},
    { timestamps: true } // if we set timestamps to true, it will automatically add createdAt and updatedAt fields
);

const User = model("user", userSchema); // users. 3rd parameter can be collection name

export default User;