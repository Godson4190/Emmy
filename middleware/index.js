const User = require("../models/user");

// all the middleware goes here
const middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Login first");
    res.redirect("/login");
};

module.exports = middlewareObj;