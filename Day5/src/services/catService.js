const Cat = require("../models/Cat.js");


exports.createCat = async (catData) => {
    const cat = Cat.create(catData);
    return cat;
};

exports.getAll = async () => {
    const cats = await Cat.find().lean();
}

exports.getCatById = async (catId) => {
    const cat = await Cat.findById(catId);
}