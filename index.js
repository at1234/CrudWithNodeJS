const express = require("express");
const bodyParser = require("body-parser");

const app = express();

process.on('uncaughtException', function (err) {
  console.log(err);
});

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/customer.routes')(app)

// setting port to 3000, & listening for requests http request.
app.listen(6000, () => {
  console.log("Server is running on port 6000.");
});