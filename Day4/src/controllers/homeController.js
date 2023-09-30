const rounter = require("express").Router();
const cubeService = require("../services/cubeService.js");

rounter.get("/", (req, res) => {
  const cubes = cubeService.getAll();
  console.log(cubes);
  res.render("index", { cubes });
});

rounter.get("/about", (req, res) => {
  res.render("about");
});

rounter.get("/404", (req, res) => {
  res.render("404");
});

module.exports = rounter;
