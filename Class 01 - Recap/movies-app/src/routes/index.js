import { Router } from "express";
import movieRouter from "./movies.routes.js";
import authRouter from "./auth.routes.js";
import { tokenValidator } from "../middleware/auth.middleware.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/movies", tokenValidator, movieRouter);

export default router;