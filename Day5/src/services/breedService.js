const Breed = require("../models/Breed.js");

exports.createBreed = async (breedData) => {
    const breed = Breed.create(breedData);
    return breed;
}


exports.catBreeds = async (breeds) => {
    const filteredCatBreeds = breeds.filter();
    // TO DO: 
}

exports.dogBreeds = async (breeds) => {
    const filteredDogBreeds = breeds.filter();
    // TO DO: 
}


const getAll = async () => {
    const breeds = await Breed.find().lean();
}