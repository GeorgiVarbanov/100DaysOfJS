const Accessory = require("../models/Accessory.js");


exports.createAccessory = async(accessoryData) => {
    const accessory = await Accessory.create(accessoryData);
    return accessory;
}

exports.getAllAccessories = async () => {
    const accessories = await Accessory.find().lean();
    return accessories;
}