// var request = require('request');

// request.get('https://google.co.in', function (err, content) {
//     console.log(content);
// });


// var os = require('os');

// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.hostname());


// var fs = require('fs');

// var callback = function (err, content) {
//     if (!err) {
//         console.log(content.toString());
//     }
//     else {
//         console.log("failed to read file");
//     }
// };

// fs.readFile('.gitignore', callback);




// var content = fs.readFileSync('.gitignore');

// console.log(content.toString());

// fs.appendFileSync('.gitignore', "text appeneded");



var math = require('./math');


var c = math.add(2, 3);
console.log(c);



function add(a, b) {
    return a + b;
}

// var c=add(10,20);
// console.log(c);


// function addAsync(a, b, callback) {

//     //simulate some delay
//     setTimeout(function () {
//         var c = a + b;
//         callback(c);
//     }, 3000);

// }

// function callback(result) {
//     console.log(result);
// }

// addAsync(20, 30);
