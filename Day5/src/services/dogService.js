const Dog = require("../models/Dog.js");


exports.createDog = async (dogData) => {
    const dog = Dog.create(dogData);
    return dog;
};

exports.getAll = async () => {
    const dog = await Dog.find().lean();
    return dog;
}

exports.getDogById = async (dogId) => {
    const dog = await Dog.findById(dogId);
    return dog;
}