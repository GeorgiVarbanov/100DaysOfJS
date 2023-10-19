const router = require("express").Router();
const userService = require("../services/userService.js");
const { extractErrorMsgs } = require("../utils/errorHandler.js");


router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);

        res.cookie('token', token, { httpOnly: true });
        res.redirect("/");
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render("user/login", {errorMessages});
    }
});


router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;

    try {

        const token = await userService.register({ 
            firstName, 
            lastName, 
            email, 
            password, 
            repeatPassword 
        });

        res.cookie('token', token, { httpOnly: true });
        res.redirect("/");;

    } catch (error) {

        const errorMessages = extractErrorMsgs(error);
        res.status(404).render("user/register", {errorMessages});
    }
});

router.get("/logout", async (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
});


module.exports = router;