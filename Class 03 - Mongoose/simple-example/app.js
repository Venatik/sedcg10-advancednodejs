import dotenv from "dotenv";
dotenv.config();
import { mongoose } from "mongoose";
import User from "./user.js";

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI);

const userData = {
    name: "Bobo",
    age: 30,
    email: "bob@gmail.com",
    password: "bob12345",
    address: {
        street: "Ilindenska",
        city: "Skopje",
    }
}

const userData2 = {
    name: "Jill",
    age: 32,
    email: "jill@gmail.com",
    password: "jill12345",
    address: {
        street: "Partizanska",
        city: "Skopje",
    }
}

const createUser = async (body) => {
    const user = new User(body); // We create the instance manually
    console.log(user);
    return await user.save();
};

const createUserTwo = async (body) => {
    return await User.create(body); // Mongoose creates the instance for us
};

// const bob = createUser(userData);

// const jill = createUserTwo(userData2);

// findOneAndUpdate - these do not go through validation

const users = await User.find({}); // returns all users
// console.log(users);

const bobUser = await User.find({ name: "Bob" }); // returns all users with the name Bob === filter
// console.log(bobUser);

const userWithAge30 = await User.findOne({ age: 30 }) // returns the first found user with age 30 === find
// console.log(userWithAge30);

// const jillUser = User.findById("6607df0e7c744fc6de846701"); // returns the first found user that matches the ID
// console.log(jillUser);