const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.render("withdraw/index");
});

router.get("/history", function(req, res){
    res.render("withdraw/history");
});

module.exports = router;