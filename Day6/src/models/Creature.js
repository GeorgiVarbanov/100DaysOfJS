const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    skinColor: { type: String, required: true },
    eyeColor: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, require: true },
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
});

const Creature = mongoose.model("Creature", creatureSchema);

module.exports = Creature;