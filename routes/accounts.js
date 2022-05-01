const express = require("express");
const router = express.Router();

router.get("/", isLoggedIn, function(req, res) {
    res.render("account/index");
});

function isLoggedIn (req, res, next){
    if(req.isAuthenticated()){
    return next();
}
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

module.exports = router;