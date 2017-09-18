//revealing module design pattern
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

function UserCtrl() {

    var post = function (req, res) {

        let user = new UserModel(req.body);

        user.save(function (err, user) {

            if (!err) {
                res.status(201);
                res.send("Successfully Saved");
            }
            else {
                res.status(500);
                if (err.errmsg && err.errmsg.indexOf("duplicate key error index") > -1)
                    res.send("Email already exists please login");
                else res.send(err);
            }
        })



    };

    var login = (req, res) => {

        UserModel.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
            if (!user) {
                res.status(500);
                res.send("Invalid username or password");
            }
            else {
                var token = jwt.sign(user.email, "secret",{expiresIn:'1h'});
                res.status(200);
                res.send({
                    email: user.email,
                    token: token
                });
            }
        });
    };

    var validate = (username, password, cb) => {
        UserModel.findOne({ email: username, password: password }, function (err, user) {
            cb(user);
        });
    }


    return {
        post: post,
        login: login,
        validate: validate
    }

};

module.exports = UserCtrl();