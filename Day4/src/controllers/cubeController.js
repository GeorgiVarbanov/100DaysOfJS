const rounter = require("express").Router();
const cubeService = require("../services/cubeService");

rounter.get("/create", (req, res) => {
  cubeService.getAll();
  res.render("cube/create");
});

rounter.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  cubeService.createCube({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

rounter.get("/details/:cubeId", (req, res) => {
  const { cubeId } = req.params;
  const cube = cubeService.getById(cubeId);
  res.render("cube/details", { cube });
});

module.exports = rounter;
