const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();


var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors())
app.use(cors(corsOptions));
app.use(cors({ origin: 'http://localhost:3000' }))

// parse requests of content-type - application/json
app.use(bodyParser.json());


app.use(require('./routes/'));
app.use(require('./routes/get-time'));
app.use(morgan('dev'));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});