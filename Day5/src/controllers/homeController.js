const router = require("express").Router();

router.get("/animals/add-breed", (req, res) => {
    res.render("breeds/addBreed");
});

router.get("/cats/add-cat", (req, res) => {
    res.render("cats/addCat");
});

router.get(("/dogs/add-dog"), (req, res) => {
    res.render("dogs/addDog");
});

router.get("/404", (req, res) => {
    res.render("404");
});

module.exports = router;