const Comment = require('../models/comment.model');

module.exports = {

    post: function (req, res) {

        let comment = new Comment(req.body);

        comment.save(function (err, data) {

            if (!err) {
                res.status(201);
                res.send(data);
            }
            else {
                res.status(500);
                res.send("Internal Server Error");
            }
        })
    }
};


