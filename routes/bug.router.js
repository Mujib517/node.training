const express = require('express');
const router = express.Router();

const bugCtrl = require('../controllers/bug.ctrl');

router.get('/', bugCtrl.get);
router.get('/:id', bugCtrl.getById);
router.post('/', bugCtrl.post);
router.put('/:id', bugCtrl.update);
router.delete('/:id', bugCtrl.delete);

module.exports = router;