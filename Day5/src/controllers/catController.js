const router = require("express").Router();
const catService = require("../services/catService.js");

router.post("/add-cat", async (req, res) => {
    const { name, description, imageUrl, breed } = req.body;
    await catService.createCat( {name , description, imageUrl, breed});
    res.redirect("/");
});




module.exports = router;