const router = require("express").Router();
const dogService = require("../services/dogService.js");

router.post("/add-dog", async (req, res) => {
    const { name, description, imageUrl, breed } = req.body;
    await dogService.createDog( {name , description, imageUrl, breed});
    res.redirect("/");
});


module.exports = router;