const rounter = require("express").Router();
const cubeService = require("../services/cubeService.js");

rounter.get("/", async (req, res) => {
  const {search, from, to } = req.query;

  const cubes =  await cubeService.getAll(search, from, to);
  res.render("index", { cubes });
});

rounter.get("/about", (req, res) => {
  res.render("about");
});

rounter.get("/404", (req, res) => {
  res.render("404");
});

module.exports = rounter;
