const router = require("express").Router();
const catService = require("../services/catService.js");
const breedService = require("../services/breedService.js");

router.get("/add-cat", async (req, res) => {
    const catBreeds = await breedService.catBreeds();
    res.render("cats/addCat", {catBreeds});
});

router.post("/add-cat", async (req, res) => {
    const { name, description, imageUrl, breed } = req.body;
    await catService.createCat( {name , description, imageUrl, breed});
    res.redirect("/");
});

router.get("/edit/:animalId", async (req, res) => {
    const catId = req.params;
    const cat = await catService.getCatById(catId.animalId);
    const catBreeds = await breedService.catBreeds();
    res.render("cats/editCat", {cat , catBreeds});
});

router.put("/edit/:animalId", async (req, res) => {
    console.log(req.body);
    res.redirect("/");
});




module.exports = router;