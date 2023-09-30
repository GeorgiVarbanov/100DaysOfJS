const express = require("express");

const expressConfig = require("./config/expressconfig");
const handlebarsConfig = require("./config/hbsconfig");
const dbConnect = require("./config/dbConfig.js");

const { PORT } = require("./constants");
const router = require("./router");

dbConnect()
.then(() => console.log(`Succesful connection to DB`))
.catch(err => console.log(`Error while connecting to DB ${err}`));

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
