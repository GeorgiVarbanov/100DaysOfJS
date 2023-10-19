const Creature = require("../models/Creature.js");

exports.create = async (creatureData) => {
    const newCreature = await Creature.create(creatureData);
    return newCreature;
};

exports.getAll = async () => {
    const creatures = await Creature.find().lean();
    return creatures;
}

exports.getById = (id) => {
    return Creature.findById(id).populate("owner");
  };

exports.update = async (id, cubeData) => Creature.findByIdAndUpdate(id, cubeData);