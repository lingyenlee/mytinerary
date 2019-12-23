const express = require("express")
const router = express.Router()
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const config = require("config")
//validator
const { check, validationResult } = require('express-validator');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post("/", [
    check("username", "Username is required")
        .not()
        .isEmpty(),

    check("email", "Please include a valid email.").isEmail(),

    check("password", "Please enter a password with 6 or more characters")
        .isLength({ min: 6 })

], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { username, email, password } = req.body

    try {
        //check if email exist
        let user = await User.findOne({ email })

        //if user exist, send error message
        if (user) {
            return res.status(400).send({ msg: "Email already exists" })
        }
        //if user doesn't exist, create new user
        user = new User({
            username,
            email,
            password
        })

        //generate hash password
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        // once register create payload that contains jwt token
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
        console.err(err.message)
        res.status(500).send({ msg: "Server Error" })
    }
})


module.exports = router