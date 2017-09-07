const express=require('express');
const router=express.Router();

//GET: /products/
router.get('/', function (req, res) {
    res.send("Products page");
});

module.exports=router;