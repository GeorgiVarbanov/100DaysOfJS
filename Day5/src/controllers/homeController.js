const router = require("express").Router();
const catService = require("../services/catService.js")
const dogService = require("../services/dogService.js")

router.get("/", (req , res) => {
    res.render("index");
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