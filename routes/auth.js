const express = require("express")
const router = express.Router()
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const config = require("config")
//validator
const { check, validationResult } = require('express-validator');
const auth = require("../middleware/auth")

// @route   GET api/auth
// @desc    Get logged in user
// @access  private
router.get("/", auth, async (req, res) => {
    try {
        //find id which is store in user.id, but remove password
        const user = await User.findById(req.user.id).select("-password")
        res.json(user)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})


// @route   POST api/auth send data to get authenticated
// @desc    Auth user & get token
// @access  public
router.post("/", [
    check("email", "Please include a valid email.").isEmail(),
    check("password", "Password is required.").exists()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
        //find email in database
        let user = await User.findOne({ email })
        //if email doesn't exist return error msg
        if (!user) {
            res.status(400).json({ msg: "Invalid Credentials" })
        }
        //if email exist, match password
        const isMatch = await bcrypt.compare(password, user.password)
        //if password doesn't match, return error message
        if (!isMatch) {
            res.status(400).json({ msg: "Invalid Credentials" })
        }

        //if password match, create payload with jwt token
        const payload = {
            user: {
                id: user.id
            }
        }

        //create the jwt token, get secret, set options, and callback to send token or err
        jwt.sign(
            payload,
            config.get("jwtSecret"),
            {
                expiresIn: 360000
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token })
            }
        )

    } catch (err) {
        console.error(err.message)
        res.status(500).send({ msg: "Server Error" })
    }
})


module.exports = router