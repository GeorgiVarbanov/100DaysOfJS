const rounter = require("express").Router();
const cubeService = require("../services/cubeService");

rounter.get("/create", async (req, res) => {
  await cubeService.getAll();
  res.render("cube/create");
});

rounter.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeService.createCube({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

rounter.get("/details/:cubeId", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getById(cubeId).lean();
  console.log(cube);
  res.render("cube/details", { cube });
});

module.exports = rounter;
