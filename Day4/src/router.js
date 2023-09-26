const router = require("express").Router();
const homeController = require("./public/controllers/homeController");
const cubeController = require("./public/controllers/cubeController");

router.use(homeController);
router.use("/cubes", cubeController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
