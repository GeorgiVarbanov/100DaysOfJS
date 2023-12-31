const router = require("express").Router();
const homeController = require("./controllers/homeController.js");
const cubeController = require("./controllers/cubeController");
const accessoryController = require("./controllers/accessoryController.js");
const userController = require("./controllers/userController.js");
const { isAuth } = require("./middlewares/authMiddleware.js");

router.use(homeController);
router.use("/cubes", cubeController);
router.use("/accessories", isAuth, accessoryController);
router.use("/users", userController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
