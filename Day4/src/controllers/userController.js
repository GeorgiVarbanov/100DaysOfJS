const router = require("express").Router();
const userService = require("../services/userService.js");

router.get("/login", async (req, res) => {
    res.render("user/login");
});

router.get("/register", async (req , res) => {
    res.render("user/register");
});




module.exports = router;