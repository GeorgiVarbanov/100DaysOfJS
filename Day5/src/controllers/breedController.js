const router = require("express").Router();
const breedService = require("../services/breedService.js");


router.get("/add-breed", (req, res) => {
    res.render("breeds/addBreed");
});

router.post("/add-breed", async (req, res) => {
    const {breed , type} = req.body;
    await breedService.createBreed({breed, type});
    res.redirect("/");
});


module.exports = router;