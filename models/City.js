//referencing mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create city schema & model
const CitySchema = new Schema({
    cityName: String,
    country: String,
    cityImage: String
});

//export the modal
module.exports = mongoose.model("city", CitySchema);
