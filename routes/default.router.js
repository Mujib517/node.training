const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send("Hello ExpressJs");
});

router.get('/health', function (req, res) {
    res.status(200);
    res.json({ status: "Up" });
});

module.exports = router;