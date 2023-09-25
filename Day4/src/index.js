const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = 5050;

app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "src/views");

const staticFiles = express.static(path.resolve(__dirname,"public"));
app.use(staticFiles)


app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));