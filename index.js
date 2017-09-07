
// function add(a,b){
//     a++;
//     b++;
//     return a+b;
// }

// var c=add(2,3);

// console.log(c);



// function addAsync(a, b,cb) {

//     setTimeout(function () {
//         var c= a + b;
//         cb(c);
//     }, 3000);
// }

// function callback(result) {
//     console.log(result);
// }

// addAsync(2, 3,callback);

var express = require('express');
var bookRouter = require('./routes/book.router');
var productRouter = require('./routes/product.router');

var app = express();
app.listen(3000);

app.get('/', function (req, res) {
    res.send("Hello world");
});

//SRP ==Single Responsibility Principle
//MEAN == mongo Express Agnular Node

// app.get('/books', bookCtrl);

app.use('/books', bookRouter);
app.use('/products', productRouter);



console.log("Server running on 3000");
