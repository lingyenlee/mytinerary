const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = function (req, res, next) {

    //get token from header
    const token = req.header("x-auth-token")

    //check if not token

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" })
    }

    try {

        //if there is token, verify token, extract payload
        const decoded = jwt.verify(token, config.get("jwtSecret"))

        //save the payload to req.user for use later
        req.user = decoded.user
        //then move on
        next()
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" })
    }
}
