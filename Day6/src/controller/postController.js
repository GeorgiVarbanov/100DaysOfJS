const router = require("express").Router();
const creatureService = require("../services/creatureService.js");

router.get("/all-posts", async (req, res) => {
    const creature = await creatureService.getAll();
    const haveCreature = true;
    if (creature.length === 0) {
        haveCreature = false;
    }
    res.render("post/all-posts", { creature, haveCreature });
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
        description,
    } = req.body;

    const payload = { name, species, skinColor, eyeColor, imageUrl, description, owner: req.user };
    await creatureService.create(payload);

    res.redirect("/posts/all-posts");
});

router.get("/:postId/creature", async (req, res) => {
    const { postId } = req.params;
    const creature = await creatureService.getById(postId).lean();
    const ownerName = creature.owner.firstName + " " + creature.owner.lastName;

    res.render("post/details", { creature, ownerName });
});

router.get("/:postId/creature/edit", async (req, res) => {
    const { postId } = req.params;
    const creature = await creatureService.getById(postId).lean();


    res.render("post/edit", { creature });
});


module.exports = router;