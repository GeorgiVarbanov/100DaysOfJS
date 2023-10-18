const router = require("express").Router();
const userService = require("../services/userService.js");


router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await userService.login(email, password);
    console.log(user);

    res.redirect("/");
});


router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;

    await userService.register({ firstName, lastName, email, password, repeatPassword } );

    res.redirect("/users/login");
});


module.exports = router;