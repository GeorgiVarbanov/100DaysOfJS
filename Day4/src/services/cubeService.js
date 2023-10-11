const Cube = require("../models/Cube.js");

exports.createCube = async (cubeData) => {
  const newCube = await Cube.create(cubeData);
  return newCube;
};

exports.getAll = async (search, from, to) => {
  let filteredCubes = await Cube.find().lean();
  const conditions = [];

  if (search) {
    conditions.push({
      name: {
        $regex: search,
        $options: 'i',
      },
    });
  }
  if (from) {
    conditions.push({difficultyLevel: { $gte: Number(from)}});
  }
  if (to) {
    conditions.push({difficultyLevel: { $lte: Number(to)}});
  }

  const finalSearch = conditions.length ? {$and: conditions} : {};

  filteredCubes = await Cube.find(finalSearch).lean();
  return filteredCubes;
};

exports.getById = (id) => {
  return Cube.findById(id).populate("accessories");
};

exports.attachAccessory = async (cubeId, accessoryId) => {
  const cube = await this.getById(cubeId);
  cube.accessories.push(accessoryId);
  return cube.save()
}

exports.update = async (id, cubeData) => Cube.findByIdAndUpdate(id, cubeData);

exports.delete = async (id) => Cube.findByIdAndDelete(id);
