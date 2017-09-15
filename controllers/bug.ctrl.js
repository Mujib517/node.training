const BugModel = require('../models/bug.model');


var bugCtrl = {

    get: function (req, res) {
        //pageSize:10
        //pageIndex=0;

        let totalRecords = 0;
        let pageSize = 2;

        BugModel.count(function (err, count) {
            if (count) totalRecords = count;
        });

        let query = BugModel.find();

        query.limit(pageSize);

        //Select * from bugs
        query.exec(function (err, bugs) {
            if (err) {
                res.status(500);
                res.send("Internal Server Error");
            }
            else {
                let response = {
                    data: bugs,
                    metadata: {
                        totalRecords: totalRecords,
                        totalPages: Math.ceil(totalRecords / pageSize)
                    }
                };
                res.status(200); //OK
                res.json(response);
            }
        });
    },

    post: function (req, res) {

        let bug = new BugModel(req.body);

        bug.save(function (err, bug) {

            if (err) {
                res.status(500);
                res.send("Internal Server Error");
                //logger.log(err);
            }
            else {
                res.status(201); //Created
                res.send(bug);
            }
        });
    },

    getById: function (req, res) {

        //let id = parseInt(req.params.id);
        //let id = +req.params.id;

        BugModel.findById(req.params.id, function (err, bug) {

            if (bug) {
                res.status(200);
                res.json(bug);
            }
            else {
                res.status(404);
                res.send("Not found");
            }
        });

    },

    update: function (req, res) {

        let bug = new BugModel(req.body);

        BugModel.findByIdAndUpdate(req.params.id, bug, function (err, updatedBug) {
            if (!err) {
                res.status(200);
                res.send("Updated");
            }
            else {
                res.status(500);
                res.send(err);
            }
        });
    },

    delete: function (req, res) {

        BugModel.findByIdAndRemove(req.params.id, function (err) {
            if (!err) {
                res.status(204); //No Content
                res.send("Successfully Deleted");
            }
            else {
                res.status(500);
                res.send("Failed to delete");
            }
        });
    }
};


module.exports = bugCtrl;