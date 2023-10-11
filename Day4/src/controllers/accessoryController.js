const router = require("express").Router();
const accessoryService  = require("../services/accessoryService.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

router.get("/create", isAuth, (req, res) => {
    res.render("accessory/create")
});

router.post("/create", isAuth, async (req, res) => {
    const { name, description, imageUrl} = req.body;
    await accessoryService.createAccessory({name, description, imageUrl});
    res.redirect("/");
});

module.exports = router;