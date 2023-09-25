const express = require("express");
const expressConfig = require("./config/expressconfig");
const handlebarsConfig = require('./config/hbsconfig');

const app = express();
const PORT = 5050;

expressConfig(app);
handlebarsConfig(app);




app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));