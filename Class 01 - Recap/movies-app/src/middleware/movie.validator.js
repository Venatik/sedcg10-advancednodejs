import Joi from "joi";

// Create a schema for validating the movie object with Joi
const movieSchema = Joi.object({
    name: Joi.string().required(),
    genre: Joi.array().min(1).items(Joi.string()).required(),
    director: Joi.string().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
});

// Create the movie validator middleware
const movieValidator = (req, res, next) => {
    const movieData = req.body;
    const validation = movieSchema.validate(movieData);

    if (validation.error) {
        res.status(400).send({
            message: validation.error.details[0].message
        });
    } else {
        next();
    }
};

export default movieValidator;