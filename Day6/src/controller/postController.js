const router = require("express").Router();

router.get("/all-posts", (req, res) => {
    res.render("post/all-posts");
});

router.get("/create", (req, res) => {
    res.render("post/create");
});

router.post("/create", (req, res) => {
    const { 
        name,
        species,
        skinColor,
        eyeColor,
        imageUrl,
        description } = req.body;

    res.redirect("/posts/all-posts");
});


module.exports = router;