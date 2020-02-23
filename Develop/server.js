const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Heroku connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://<workoutDB>:<Brandon123>@ds061711.mlab.com:61711/heroku_fwf0xnxk";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
});
// Creating Routes
require("./routes/api")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
