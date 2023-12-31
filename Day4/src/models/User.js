const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"],
        minLength: [5, "Username is too short!"],
        match: [/^[A-Za-z0-9]+$/, "Username should not containt special symbols"],
        unique: {
            value: true,
            message: "Username already exists!",
        },
    },
    password: {
        type: String,
        minLength: [8, "Password too short!"],
        required: [true, "Password is required!"],
        match: [/^[A-Za-z0-9]+$/, "Password should not containt special symbols"],
    }
});

userSchema.path("username").validate(function (username) {
    const user = mongoose.model("User").findOne({username});
    return !!user;
}, "Username already exists!");

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;