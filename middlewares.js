const jwt = require("jsonwebtoken");
const userCtrl = require("./controllers/user.ctrl");

module.exports = {
    isValidToken: function (req, res, next) {

        jwt.verify(req.headers["authorization"], "secret", function (err) {
            if (!err) next();
            else {
                res.status(401);//unauthorized
                res.send("Unauthorized");
            }
        });
    },

    isAuthenticated: function (req, res, next) {

        let username = req.headers["username"];
        let password = req.headers["password"];

        if (!username || !password) {
            res.status(401);//unauthorized
            res.send("Unauthorized");
        }
        else {
            userCtrl.validate(username, password, function (result) {
                if (result) next();
                else {
                    res.status(401);//unauthorized
                    res.send("Unauthorized");
                }
            });
        }
    }

}