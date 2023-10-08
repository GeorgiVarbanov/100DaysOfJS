const router = require("express").Router();
const dogService = require("../services/dogService.js");
const breedService = require("../services/breedService.js");

router.get(("/add-dog"), async (req, res) => {
    const dogBreeds = await breedService.dogBreeds();
    res.render("dogs/addDog", {dogBreeds});
});

router.post("/add-dog", async (req, res) => {
    const { name, description, imageUrl, breed } = req.body;
    await dogService.createDog( {name , description, imageUrl, breed});
    res.redirect("/");
});

router.get("/edit/:animalId", async (req, res) => {
    const dogId = req.params;
    const dog = await dogService.getDogById(dogId.animalId);
    console.log(dog);
    const dogBreeds = await breedService.dogBreeds();
    res.render("dogs/editDog", {dog , dogBreeds});
});


module.exports = router;