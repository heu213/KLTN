const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 8080;
const cors = require('cors');
const app = express()

// Connect to MongoDB:
mongoose.Promise = global.Promise;
mongoose.connect(process.env.URL_MONGODB);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors())

app.get('/', (req, res) => {res.send('welcome to bookshop')})

app.listen(port, () => {
  console.log('Web server is listening on port : '+port)
})
