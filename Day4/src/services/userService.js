const User = require("../models/User.js");


exports.register = (userData) => {
    return User.create(userData);
}