const router = require("express").Router();
const creatureService = require("../services/creatureService.js");

router.get("/all-posts", (req, res) => {
    res.render("post/all-posts");
});

router.get("/create", (req, res) => {
    res.render("post/create");
});

router.post("/create", async (req, res) => {
    const {
        name,
        species,
        skinColor,
        eyeColor,
        imageUrl,
        description } = req.body;

    await creatureService.createCreature({
        name,
        species,
        skinColor,
        eyeColor,
        imageUrl,
        description
    });

    res.redirect("/posts/all-posts");
});


module.exports = router;