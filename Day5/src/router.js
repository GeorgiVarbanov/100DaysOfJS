const router = require("express").Router();
const homeController = require("./controllers/homeController.js");
const catController = require("./controllers/catController.js");
const dogController = require("./controllers/dogController.js");


router.use(homeController);
router.use("/cats", catController);
router.use("/dogs", dogController);


router.get("*", (req, res) => {
    res.redirect("/404");
});

module.exports = router;