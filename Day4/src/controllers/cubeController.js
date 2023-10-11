const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryController = require("../services/accessoryService.js");
const { loadDifficultyLevel } = require("../utils/viewOption.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

router.get("/create", isAuth, (req, res) => {
  res.render("cube/create");
});

router.post("/create", isAuth, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeService.createCube({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner: req.user,
  });
  res.redirect("/");
});

router.get("/details/:cubeId", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getById(cubeId).lean();
  const hasAccessories =
    cube.accessories === undefined ? false : cube.accessories.length > 0;

  if (req.user_id) {
    const isOwner = cube.owner?.toString() === req.user._id;
    res.render("cube/details", { cube, hasAccessories, isOwner });
  } else {
    const isOwner = false;
    res.render("cube/details", { cube, hasAccessories, isOwner });
  }

});

router.get("/:cubeId/attach-accessory", isAuth,async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getById(cubeId).lean();
  const accessoryIds = cube.accessories ? cube.accessories.map((a) => a._id) : [];

  console.log(accessoryIds);

  const accessories = await accessoryController.getWithoutOwned(accessoryIds);

  const hasAccessories = accessories.length > 0;

  res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", isAuth,async (req, res) => {
  const { cubeId } = req.params;
  const { accessory: accessoryId } = req.body;
  await cubeService.attachAccessory(cubeId, accessoryId);

  res.redirect(`/cubes/details/${cubeId}`);
});

router.get("/:cubeId/edit", isAuth,async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getById(cubeId).lean();
  const options = loadDifficultyLevel(cube.difficultyLevel);

  res.render("cube/edit", { cube, options });
});

router.post("/:cubeId/edit", isAuth,async (req, res) => {
  const cubeId = req.params.cubeId;
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const payload = { name, description, imageUrl, difficultyLevel };

  await cubeService.update(cubeId, payload);

  res.redirect(`/cubes/details/${cubeId}`);
});

router.post("/:cubeId/delete", isAuth,async (req, res) => {
  await cubeService.delete(req.params.cubeId);

  res.redirect(`/`);
});

router.get("/:cubeId/delete", isAuth,async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getById(cubeId).lean();
  const options = loadDifficultyLevel(cube.difficultyLevel);

  res.render("cube/delete", { cube, options });
});

module.exports = router;
