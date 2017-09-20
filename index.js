const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const defaultRouter = require('./routes/default.router');
const bugRouter = require('./routes/bug.router');
const userRouter = require('./routes/user.router');
const commentRouter = require('./routes/comment.router');
const middlewares = require('./middlewares');

const port = process.env.PORT | 3000;

app.listen(port);
console.log("Server is running on port " + port);

mongoose.Promise=global.Promise;
//mongoose.connection.openUri("mongodb://localhost:27017/bugsdb");
mongoose.connection.openUri("mongodb://admin:admin@ds143744.mlab.com:43744/bugsdb");



app.use(bodyParser.json());

//Route Config.public routes
app.use('/', defaultRouter);
app.use('/api/users', userRouter);


//app.use(isAuthenticated);
//app.use(middlewares.isValidToken);

//private route
app.use('/api/bugs', bugRouter);
app.use('/api/comments', commentRouter);
