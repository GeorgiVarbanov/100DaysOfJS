const router = require("express").Router();
const homeController = require("./controller/homeController.js");
const userController = require("./controller/userController.js");
const postController = require("./controller/postController.js");

router.use(homeController);
router.use("/users", userController);
router.use("/posts", postController);

router.get("*", (req, res) => {
    res.render("404");
});

module.exports = router;