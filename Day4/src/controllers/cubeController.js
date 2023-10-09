const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryController = require("../services/accessoryService.js");

router.get("/create", async (req, res) => {
  await cubeService.getAll();
  res.render("cube/create");
});

router.post("/create", async (req, res) => {
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

  res.render("cube/details", { cube, hasAccessories });
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getById(cubeId).lean();
  const accessoryIds = cube.accessories ? cube.accessories.map((a) => a._id) : [];

  console.log(accessoryIds);

  const accessories = await accessoryController.getWithoutOwned(accessoryIds);

  const hasAccessories = accessories.length > 0;

  res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const { accessory: accessoryId } = req.body;
  await cubeService.attachAccessory(cubeId, accessoryId);

  res.redirect(`/cubes/details/${cubeId}`);
});

router.get("/:cubeId/edit", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getById(cubeId).lean();

  res.render("cube/edit", { cube });
});

router.get("/:cubeId/delete", (req, res) => {
  res.render("cube/delete");
});

module.exports = router;
