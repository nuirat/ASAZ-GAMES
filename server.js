const express = require("express");
const api = require("./server/routes/api");
const mongoose = require("mongoose");
const PORT = 4001;
const app = express();
// let cookieParser = require("cookie-parser");

let cors = require("cors");
// app.use(cookieParser());
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const session = require("express-session");

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(bodyParser.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "supersecret",
    cookie: {
      httpOnly: false,
      secure: false,
    },
  })
);
mongoose.connect("mongodb://localhost/games");

app.use(express.json());
app.use("/", api);

app.listen(PORT, function () {
  console.log(`The server is listening on port : ${PORT}`);
});
