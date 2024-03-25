import DataService from "../services/data.service.js";
import { createPath } from "../utils/utils.js";
import bcrypt from "bcryptjs";

const usersPath = createPath(["db", "users.json"]); // CHECK

export default class AuthModel {
    static async getAll() {
        return await DataService.readData(usersPath);
    }

    static async getById(id) {
        const users = await DataService.readData(usersPath);
        const foundUser = users.find((user) => user.id === id);
        if (!foundUser) {
            throw new Error("User not found");
        }
        return foundUser;
    }

    static async loginUser(userCredentials) {
        const users = await this.getAll();
        const { email, password } = userCredentials;
        const foundUser = users.find((user) => user.email === email);
        if (!foundUser) {
            throw new Error("Invalid Credentials.");
        }

        const isPasswordValid = await bcrypt.compare(password, foundUser.password);
        if (!isPasswordValid) {
            throw new Error("Invalid Credentials.");
        }

        delete foundUser.password;
        return foundUser;
    }

    static async logoutUser(userId) {
        const foundUser = await this.getById(userId);
        if (!foundUser) {
            throw new Error("User not found.");
        }

        return foundUser;
    }
}