const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    breed: String,
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;