const express = require("express");
const router = require("./router.js");

const expressConfig = require("./config/expressConfig.js");
const handlebarsConfig = require("./config/hbsConfig");

const app = express();
const { PORT } = require("./constants.js");

expressConfig(app);
handlebarsConfig(app);

app.get("/", (req , res) => {
    res.render("index");
});

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))