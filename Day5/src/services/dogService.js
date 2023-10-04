const Dog = require("../models/Cat.js");


exports.createDog = async (catData) => {
    const cat = Dog.create(catData);
    return cat;
};

exports.getAll = async () => {
    const cats = await Dog.find().lean();
}

exports.getDogById = async (catId) => {
    const cat = await Dog.findById(catId);
}