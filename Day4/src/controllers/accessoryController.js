const router = require("express").Router();
const accessoryService  = require("../services/accessoryService.js");

router.get("/create", (req, res) => {
    res.render("accessory/create")
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl} = req.body;
    console.log({name,description,imageUrl});
    await accessoryService.createAccessory({name, description, imageUrl});
    res.redirect("/");
});

module.exports = router;