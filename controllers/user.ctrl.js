//revealing module design pattern
const UserModel = require('../models/user.model');

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
            console.log(user, err);
            if (!user) {
                res.status(500);
                res.send(err);
            }
            else {
                res.status(200);
                res.send("Logged in");
            }
        });
    };

    return {
        post: post,
        login: login
    }

};

module.exports = UserCtrl();