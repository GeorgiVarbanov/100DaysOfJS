const router = require("express").Router();
const cubeService = require("../services/cubeService");
const { getAllAccessories } = require("../services/accessoryService.js");

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
  });
  res.redirect("/");
});

router.get("/details/:cubeId", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getById(cubeId).lean();
  const accessories = await getAllAccessories();
  res.render("cube/details", { cube , accessories});
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
  const {cubeId} =req.params;
  const cube = await cubeService.getById(cubeId).lean();
  const accessories = await getAllAccessories();
  const hasAccessories = accessories.length > 0;

  res.render("accessory/attach", {cube, accessories, hasAccessories});
})

module.exports = router;
