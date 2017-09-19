const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment.ctrl');

router.post('/', commentCtrl.post);

module.exports = router;