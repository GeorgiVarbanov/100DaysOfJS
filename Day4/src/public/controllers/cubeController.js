const rounter = require('express').Router();

rounter.get("/create", (req, res) => {
    res.render('create');
});

module.exports = rounter;