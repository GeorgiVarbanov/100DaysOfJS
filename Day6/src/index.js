const express = require("express");
const app = express();

const { PORT } = require("./constants.js");

app.get("/", (req, res) => {
    res.send("Hello home");
});

app.listen(PORT, () => console.log(`Server is listening on port:${PORT}`));