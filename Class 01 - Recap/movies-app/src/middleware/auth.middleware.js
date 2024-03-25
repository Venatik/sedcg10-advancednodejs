import AuthModel from "../models/auth.model.js";
import JwtService from "../services/jwt.service.js";

export const tokenValidator = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            res.sendStatus(403);
        }

        const token = authHeader.split(" ")[1];
        const tokenContent = JwtService.verifyAccessToken(token);
        const userId = tokenContent.userId;

        const user = await AuthModel.getById(userId);

        if (!user) {
            return res.sendStatus(403);
        }

        delete user.password;
        req.user = user;

        next();
    } catch (error) {
        res.status(403).send({ message: error.message });
    }
};