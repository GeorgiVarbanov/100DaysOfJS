const router = require("express").Router();
const userService = require("../services/userService.js");

router.get("/login", async (req, res) => {
    res.render("user/login");
});

router.get("/register", async (req , res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const {username , password , repeatPassword} = req.body;
    await userService.register({username, password, repeatPassword});
    res.redirect("/users/login");
});




module.exports = router;