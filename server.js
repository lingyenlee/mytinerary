// base setup
const express = require("express")
const connectDB = require("./config/db")

//initialise express
const app = express()

//test
app.get("/", (req, res) => res.json({ msg: "Welcome to myTinerary...." }))

//init middleware (bodyparser)
app.use(express.json({ extended: false }))

//set port and connect
const PORT = process.env.PORT || 5000

//connect mongoDB
connectDB()

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

//define routes
app.use("/api/users", require("./routes/users"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/cities", require("./routes/cities"))
app.use("/api/itineraries", require("./routes/itineraries"))
app.use("/api/favourites", require("./routes/favourites"))
app.use("/uploads", express.static("uploads"))
