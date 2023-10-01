const uniqid = require("uniqid");
const Cube = require("../models/Cube.js");


exports.createCube = async (cubeData) => {
  const newCube = await Cube.create(cubeData);
  return newCube;
};

exports.getAll = async () => {
  let cubes = await Cube.find().lean();
  return cubes;
};

exports.getById = (id) => {
  return Cube.findById(id);
};

exports.attachAccessory = async (cubeId, accessoryId) => {
  const cube = await this.getById(cubeId);
  cube.accessories.push(accessoryId);
  return cube.save()
}
