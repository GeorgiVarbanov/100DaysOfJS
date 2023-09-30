//import { Cat } from "./components/catComponent/cat.js";

const http = require("http");
const fs = require("fs/promises");
const PORT = 3000;

const cats = [
    {
        imageUrl: 'https://image.petmd.com/files/styles/863x625/public/2023-05/russian-blue.jpg',
        name: 'Cesar',
        breed: 'Russian Blue',
        description: 'Ceaser Pachots bro',
    },
    {
        imageUrl: 'https://www.care.com/c/wp-content/uploads/sites/2/2018/10/GettyImages-1285739074-1024x680.jpg.optimal.jpg',
        name: 'Aya',
        breed: 'StreetCat',
        description: 'Very cute and fluffy',
    },
    {
        imageUrl: 'https://www.purina.co.nz/sites/default/files/2020-11/8-Fluffy-Cat-BreedsHERO.jpg',
        name: 'Pretty',
        breed: 'ulichna',
        description: 'A very pretty cat',
    },
    {
        imageUrl: 'https://www.omlet.co.uk/images/cache/512/341/British-shorthair-self-cat-lying-on-floor.jpg',
        name: 'Silvester',
        breed: 'British',
        description: 'A pretty cool and chill dude',
    }];


const server = http.createServer(async (req, res) => {
    const { url } = req;

    if (url === "/") {
        const imageUrlPattern = /{{imageUrl}}/g;
        const namePattern = /{{name}}/g;
        const breedPattern = /{{breed}}/g;
        const descriptionPattern = /{{description}}/g;

        const homeHtml = await fs.readFile('./views/home/index.html', "utf-8");
        const catTemplate = await fs.readFile(`./components/catComponent/catHtml.html`, `utf-8`);

        const catHtml = cats.map((cat) =>
            catTemplate
                .replace(imageUrlPattern, cat.imageUrl)
                .replace(namePattern, cat.name)
                .replace(breedPattern, cat.breed)
                .replace(descriptionPattern, cat.description)
        );

        const homeHtmlTemplate = homeHtml.replace("{{cats}}", catHtml)

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(homeHtmlTemplate);
    } else if (url === `/content/styles/site.css`) {
        const siteCss = await fs.readFile(`./content/styles/site.css`, "utf-8")
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(siteCss);
    } else if (url === `/cats/add-breed`) {
        const addBreadHtml = await fs.readFile(`./views/addBreed.html`, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(addBreadHtml);
    } else if (url === `/cats/add-cat`) {
        const addCatHtml = await fs.readFile(`./views/addCat.html`, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(addCatHtml);

        if (req.method === "POST") {
            let body = "";

            req.on('data', chunk => {
                
                body += chunk;
            });

            req.on('end', () => {
                console.log(body.trim());
                const pattern = /\s*([a-zA-z]*)\s/g;
                const newData = body.match(pattern);

                const currentCat = {
                    imageUrl: "",
                    //name:newData[4].trim(),
                    //breed:newData[7] + " " + newData[8],
                    //description:newData[10].trim(),
                }

                console.log(currentCat);
                console.log(newData)
            });
        }

    } else if (url === `/cats/edit-cat`) {

        const editCat = await fs.readFile(`./views/editCat.html`, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(editCat);
    } else if (url === `/random`) {
    }
    res.end();
});


server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });