const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({

    // userID: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     required: true,
    //     index: true
    // },

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    favourites: {
        type: Array
    }

})

module.exports = mongoose.model("user", UserSchema)