const mongoose = require("mongoose");

const breedSchema = new mongoose.Schema({
    breedName: String,
    type: String,
});

const Breed = mongoose.model("Breed", breedSchema);

module.exports = Breed;