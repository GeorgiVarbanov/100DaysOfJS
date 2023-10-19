const Creature = require("../models/Creature.js");

exports.createCreature = async (creatureData) => {
    const newPosts = await Creature.create(creatureData);
    return newPosts;
};