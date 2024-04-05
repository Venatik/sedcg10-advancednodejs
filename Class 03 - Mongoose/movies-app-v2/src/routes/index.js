import { Router } from "express";
import movieRouter from "./movie.routes.js";

const router = Router();

router.use("/movies", movieRouter);

export default router;