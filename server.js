const path = require("path");
const fs = require("fs");
const feth = require("isomorphic-fetch")



const filePath = path.join(__dirname, "/popular-articles.json");

fetch("https://reddit.com/r/popular.json")
    .then((res) => res.json())
    .then((res) => {
        const {
        data: { children },
    } = res;

    const articles = [];
    children.forEach(({ data: { url, title, author}}) => {
        articles.push({ title, author, url });
    });
        
    fs.writeFile(filePath, JSON.stringify(articles), (err) => {
        if (err) {
            console.log("error");
            return;
        }
        console.log("success")
    });
    });





