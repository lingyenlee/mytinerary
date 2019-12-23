const express = require("express")
const router = express.Router()
const City = require("../models/City")
const Itinerary = require("../models/Itinerary")
const upload = require("../util/upload")
const auth = require("../middleware/auth")

//test city route
//router.get('/api/cities', (req, res) => res.json({ msg: 'Users Works' }));


// @route   GET api/cities
// @desc    Get all cities
// @access  Private
router.get("/", auth, async (req, res) => {

    try {
        const cities = await City.find().sort({ cityName: 1 })
        res.json(cities)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server Error")
    }

});


// @route   GET api/cities
// @desc    Get itineraries by city
// @access  Private
router.get("/:city", auth, async (req, res) => {

    try {
        let cityItinerary = await Itinerary.find({ city: req.params.city })
        if (!cityItinerary) return res.status(404).json({ msg: "No itinerary available" })

        res.json(cityItinerary)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }

})


// @route   POST api/cities
// @desc    Add city
// @access  Private
router.post("/", upload.single("cityImage"), async (req, res) => {
    // console.log(req.file)

    const { cityName, country } = req.body
    try {
        const newCity = new City({
            cityName,
            country,
            cityImage: req.file.path
        });

        const city = await newCity.save()
        res.json(city)
        res.send("city added successfully")


    } catch (error) {

        console.error(error.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router