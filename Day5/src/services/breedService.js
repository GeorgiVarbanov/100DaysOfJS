const Breed = require("../models/Breed.js");

exports.createBreed = async (breedData) => {
    const breed = Breed.create(breedData);
    return breed;
}


exports.catBreeds = async () => {
    const breeds = await Breed.find().lean();
    const filteredBreeds = breeds
    .filter((breed) => breed.type === "Cat")
    return filteredBreeds;
}

exports.dogBreeds = async () => {
    const breeds = await Breed.find().lean();
    const filteredBreeds = breeds
    .filter((breed) => breed.type === "Dog")
    return filteredBreeds;
}

