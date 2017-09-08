//ES 6
const express = require('express');
const bookCtrl=require('../controllers/book.ctrl');
const router = express.Router();

router.get('/', bookCtrl);


module.exports = router;