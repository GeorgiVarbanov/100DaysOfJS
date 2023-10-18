const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt.js");
const { SECRET } = require("../constants.js");

exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Invalid email or password");
    }

    const payload = { _id: user._id, email: user.email };
    const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" })

    return token;
};