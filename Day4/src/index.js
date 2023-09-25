const express = require("express");
const expressConfig = require("./config/expressconfig");
const handlebarsConfig = require('./config/hbsconfig');
const { PORT } = require('./constants');

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));