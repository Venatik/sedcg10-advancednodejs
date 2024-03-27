import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;

// add the variables dynamically from .env

// const MONGO_URI = mongodb+srv://venatik:<password>@cluster0.7cutxqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// Connection string
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/movies?retryWrites=true&w=majority`;

const client = new MongoClient(MONGO_URI);

let connection;
export let database;

export async function connectToDatabase() {
    if (!connection) {
        try {
            connection = await client.connect();
            database = connection.db("nodeJSAdvanced");
            console.log("Successfully connected to MongoDB.");
            // console.log(database);
        } catch (error) {
            console.log("Error connecting to MongoDB:", { error });
        }
        return connection;
    }
}

export function getDb() {
    if (!connection) {
        throw new Error("Error initializing database.")
    }
    return database;
}