const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');


const app = express();

mongoose.connect("mongodb+srv://yansiu:PqqAnunBH7q34Yi@cluster0-xpqsp.mongodb.net/node-angular?retryWrites=true")
  .then(() => {
    console.log('Connected to database.');
  })
  .catch(() => {
    console.log('Connection failed.');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

// Cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
