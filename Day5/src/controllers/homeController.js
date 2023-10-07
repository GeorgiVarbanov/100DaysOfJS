const router = require("express").Router();
const catService = require("../services/catService.js")
const dogService = require("../services/dogService.js")

router.get("/", async (req , res) => {
    const cats = await catService.getAll();
    const dogs = await dogService.getAll();
    res.render("index", {cats, dogs});
});

router.get("/cats/add-cat", (req, res) => {
    res.render("cats/addCat");
});

router.get("/animals/add-breed", (req, res) => {
    res.render("breeds/addBreed");
});

router.get(("/dogs/add-dog"), (req, res) => {
    res.render("dogs/addDog");
});

router.get("/404", (req, res) => {
    res.render("404");
});

module.exports = router;