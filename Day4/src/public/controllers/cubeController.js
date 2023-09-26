const rounter = require("express").Router();
const cubeService = require("../../services/cubeService");

rounter.get("/create", (req, res) => {
  cubeService.getAll();
  res.render("create");
});

rounter.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  cubeService.createCube({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) });
  res.redirect("/");
});

module.exports = rounter;
