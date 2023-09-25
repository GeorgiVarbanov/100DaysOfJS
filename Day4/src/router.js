const router = require("express").Router();
const homeController = require("./public/controllers/homeController");
const cubeController = require("./public/controllers/cubeController");


router.use(homeController);
router.use("/cubes", cubeController);

module.exports = router;
