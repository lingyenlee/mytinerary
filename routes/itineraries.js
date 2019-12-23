const express = require("express")
const router = express.Router()
const Itinerary = require("../models/Itinerary")
const upload = require("../util/upload")
const auth = require("../middleware/auth")


// @route   GET api/itineraries
// @desc    Get all itineraries
// @access  Private
router.get("/", auth, async (req, res) => {

    try {
        const itinerary = await Itinerary.find()
        res.json(itinerary)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server Error")
    }

});


// @route   POST api/itineraries
// @desc    Add new itineraries
// @access  Private
router.post("/", upload.single("itineraryImage"), async (req, res) => {

    const { itineraryName, rating, duration, cost, city, username } = req.body

    try {
        const newItinerary = new Itinerary({
            itineraryName,
            rating,
            duration,
            cost,
            city,
            username,
            itineraryImage: req.file.path,
        })

        const itinerary = await newItinerary.save()
        res.json(itinerary)
        // console.log(itinerary)
        res.send("Itinerary added")

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }

})


module.exports = router