const canDeleteMovie = (req, res, next) => {
    const userRole = req.user && req.user.role;

    if (userRole === "admin") {
        next();
    } else {
        res.status(403).send({ message: "You are not authorized to perform this action." })
    }
};

export default canDeleteMovie;