const express = require("express")
const cookieParser = require("cookieparser")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const userRouter = require("./api/router/user.router.js")
const refreshRouter = require("./api/router/refresh.router.js")
const songRouter = require("./api/router/song.router.js")

mongoose.connect(process.env.DATABASEURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database Connected")
})
.catch(err => {
    console.error("Database connection failed: ", err.message)
})
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000
app.use("/api/user", userRouter)
app.use("/api/user", refreshRouter)
app.use("/api/song", songRouter)
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})