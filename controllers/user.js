const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("user/signup");
};

module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email });
        await newUser.setPassword(password);
        await newUser.save();
        
        // Log user in without session manager to avoid "next is not a function"
        req.login(newUser, { session: false }, (err) => {
            if (err) return next(err);
        });
        
        // Manually set user and save session
        req.session.passport = { user: newUser._id.toString() };
        req.session.save((err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/users/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("user/login");
};

module.exports.login = (req, res) => {
    req.flash("success", "Welcome back!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "Logged out successfully!");
        res.redirect("/users/login");
    });
};
