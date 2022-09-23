const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) => {

    const token = req.cookies.access_token;
    if (!token) {

        throw new Error("Your are not authenticated");
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            throw new Error("Token is not valid");
        }
        req.user = user;
        next();
    })

}

const verifyUser = async(req, res, next) => {

    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            throw new Error("You are not authorized");
        }
    })

}

const verifyAdmin = async(req, res, next) => {

    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            throw new Error("You are not authorized");
        }
    })

}

module.exports = { verifyToken, verifyUser, verifyAdmin };