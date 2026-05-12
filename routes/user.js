const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user");
const { saveredirectUrl } = require("../middleware");
const userController = require("../controllers/user");
// GET signup page
router.get("/signup", userController.renderSignupForm);

router.post("/signup", userController.signup);

router.get("/login", userController.renderLoginForm);

router.post("/login",
    saveredirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/users/login",
        failureFlash: true
    }),
    userController.login
);

router.get("/logout", userController.logout);

module.exports = router;