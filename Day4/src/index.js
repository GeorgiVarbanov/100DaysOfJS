const express = require("express");
const expressConfig = require("./config/expressconfig");
const handlebarsConfig = require('./config/hbsconfig');
const { PORT } = require('./constants');
const router = require('./router');

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));