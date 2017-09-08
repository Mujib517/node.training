var bugs = [
    { id: 1, name: "Button click issue", category: "UI", description: "Button click doesn't work" },
    { id: 2, name: "Dropdown issue", category: "UI", description: "Button click doesn't work" },
    { id: 3, name: "API doesn't return response", category: "UI", description: "No response from rest api" }
];

var bugCtrl = {

    get: function (req, res) {
        res.status(200); //OK
        res.json(bugs);
    },

    post: function (req, res) {
        console.log(req.body);

        res.send("Success");
    },

    getById: function (req, res) {

        let id = parseInt(req.params.id);

        // var bug;
        // for(var i=0;i<bugs.length;i++){
        //     if(bugs[i].id===id){
        //         bug= bugs[i];
        //         break;
        //     } 
        // }

        var bug = bugs.filter(function (item) {
            return item.id === id;
        })[0];

        if (bug) {
            res.status(200);
            res.json(bug);
        }
        else {
            res.status(404);
            res.send("Not found");
        }
    },

    update: function (req, res) {
        console.log(req.body);
        res.send("Updated");
    },
    delete: function (req, res) {
        res.send("Deleted!" + req.params.id);
    }
};


module.exports = bugCtrl;