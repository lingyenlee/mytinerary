const express = require("express")
const router = express.Router()
const User = require("../models/User")
const auth = require("../middleware/auth")
const Itinerary = require("../models/Itinerary")


// @route   GET api/favourites/:id
// @desc    Get favourite itineraries
// @access  Private

router.get('/:id', auth, async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        const favourites = await Itinerary.find({
            _id: { $in: user.favourites }
        })
        res.json(favourites)

    } catch (error) {
        console.error(error.message)
    }
})


// @route   POST api/itineraries/favourites/:id
// @desc    Add favourite itineraries
// @access  Private
router.post("/add/:id", auth, async (req, res) => {

    try {
        let favourite = await User.findByIdAndUpdate(
            req.params.id,
            { $push: { favourites: req.body.itineraryId } }
        )
        res.json(favourite)

    } catch (error) {
        console.error(error.message)
    }

})

// @route   DELETE api/itineraries/favourites/:id
// @desc    Delete favourite itineraries
// @access  Private

router.post("/delete/:id", auth, async (req, res) => {

    try {
        let favourite = await User.findByIdAndUpdate(
            req.params.id,
            { $pull: { favourites: req.body.itineraryId } }
        )
        res.json(favourite)

    } catch (error) {
        console.error(error.message)
    }
})


module.exports = router