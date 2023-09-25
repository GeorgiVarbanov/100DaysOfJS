const rounter = require('express').Router();

rounter.get("/", (req, res) => {
    res.render('index');
});

rounter.get("/about", (req, res) => {
    res.render('about');
});

rounter.get("/404", (req, res) => {
    res.render('404');
})

module.exports = rounter;