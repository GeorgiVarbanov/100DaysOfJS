const router = require("express").Router();
const catService = require("../services/catService.js");
const dogService = require("../services/dogService.js");
const breedService = require("../services/breedService.js");

router.get("/", async (req , res) => {
    const cats = await catService.getAll();
    const dogs = await dogService.getAll();
    res.render("index", {cats, dogs});
});

router.get("/404", (req, res) => {
    res.render("404");
});

module.exports = router;