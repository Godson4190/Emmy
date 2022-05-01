const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.render("invest/index");
});

router.get("/new", function(req, res){
    res.render("invest/new");
});

router.get("/plan", function(req, res){
    res.render("invest/plan");
});

router.get("/success", function(req, res){
    res.render("invest/success");
});

router.get("/history", function(req, res){
    res.render("invest/history");
});

module.exports = router;