const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const hotelsRoute = require("./routes/hotels")
const roomsRoute = require("./routes/rooms")
const usersRoute = require("./routes/users");
const cookieParser = require("cookie-parser");
const app = express();
var cors = require('cors');

app.use(cors());

dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB");
    } catch (error) {
        throw new Error(error);
    }
}

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);


app.listen(process.env.PORT || 8080, () => {
    connect();
    console.log("Server Listening at port 8080");
})