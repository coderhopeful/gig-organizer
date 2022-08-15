const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const gigsSchema = require("./models/gigs")
const cors = require('cors')

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use(cors())

const gigRoute = require('./routes/gigs')

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log("DB online"))
  .catch(err => console.log(err))


app.use('/', gigRoute);

app.use(express.static(path.join(__dirname, "/client")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});




app.listen(PORT, () => console.log("Server Online"));









