const mongoose = require("mongoose");

// create itinerary schema
const ItinerarySchema = mongoose.Schema({
    itineraryName: String,
    itineraryImage: String,
    rating: Number,
    duration: Number,
    cost: String,
    city: String,
    username: String,
});

module.exports = mongoose.model("itinerary", ItinerarySchema);