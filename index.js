const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const defaultRouter = require('./routes/default.router');
const bugRouter = require('./routes/bug.router');
const userRouter = require('./routes/user.router');
const middlewares = require('./middlewares');

const port = process.env.PORT | 3000;

app.listen(port);
console.log("Server is running on port " + port);

mongoose.connection.openUri("mongodb://localhost:27017/bugsdb");

app.use(bodyParser.json());

//Route Config.public routes
app.use('/', defaultRouter);
app.use('/api/users', userRouter);


//app.use(isAuthenticated);
app.use(middlewares.isValidToken);

//private route
app.use('/api/bugs', bugRouter);



// addAsync(a, b, cb){
//     setTimeout(function () {
//         cb(a + b)
//     });

// }

// addAsync(2, 3, function (c) {
//     console.log(c);
// });