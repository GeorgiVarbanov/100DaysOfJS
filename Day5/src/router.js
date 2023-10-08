const router = require("express").Router();
const homeController = require("./controllers/homeController.js");
const catController = require("./controllers/catController.js");
const dogController = require("./controllers/dogController.js");
const breedController = require("./controllers/breedController.js");


router.use(homeController);
router.use("/cats", catController);
router.use("/dogs", dogController);
router.use("/animals", breedController);


router.get("*", (req, res) => {
    res.redirect("/404");
});

module.exports = router;