const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./router.js");


const expressConfig = require("./config/expressConfig.js");
const handlebarsConfig = require("./config/hbsConfig.js");
const dbConnect = require("./config/dbConfig.js");


const app = express();
const { PORT } = require("./constants.js");

dbConnect()
.then(() => console.log(`Succesful connection to DB`))
.catch(err => console.log(`Error while connecting to DB ${err}`));

expressConfig(app);
handlebarsConfig(app);

app.use(cookieParser());
app.use(routes);



app.listen(PORT, () => console.log(`Server is listening on port:${PORT}`));