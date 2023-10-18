const router = require("express").Router();


router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    res.redirect("/");
});


router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;
    const payload = { firstName, lastName, email, password };

    res.redirect("/users/login");
});


module.exports = router;