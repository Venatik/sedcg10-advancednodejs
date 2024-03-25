import JwtService from "../services/jwt.service.js";
import AuthModel from "../models/auth.model.js";

export default class AuthController {
    static async loginUser(req, res) {
        try {
            const credentials = req.body;
            const user = await AuthModel.loginUser(credentials);
            const accessToken = JwtService.createAccessToken(user.id);

            res.setHeader("Authorization", accessToken);
            res.status(200).send({ user, accessToken });
        } catch (error) {
            res.status(401).send(error.message);
        }
    }

    static async logoutUser(req, res) {
        try {
            const userId = req.params.id;
            const foundUser = await AuthModel.logoutUser(userId);

            res.removeHeader("Authorization");
            res.status(200).send(`User with email: ${foundUser.email} logged out successfully.`);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}