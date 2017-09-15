const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const defaultRouter = require('./routes/default.router');
const bugRouter = require('./routes/bug.router');

const port = process.env.PORT | 3000;

app.listen(port);
console.log("Server is running on port " + port);

mongoose.connect("mongodb://localhost:27017/bugsdb");

app.use(bodyParser.json());

//Route Config
app.use('/', defaultRouter);
app.use('/api/bugs', bugRouter);
