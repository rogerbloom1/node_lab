const fs = require("fs");
const path = require("path");
const fetch = require("isomorphic-fetch");

const imageFetch = async () => {
    let res = await fetch("https://reddit.com/r/popular.json");
    let {data: {children},
}= await res.json();

const extensionList = [".png", ".gif", ".jpeg", ".jpg", ".svg"];

children.forEach(({data: { url,id }}) => {
    let extension = path.extname(url);

    if(extensionList.includes(extension)) {
        const filePath = path.join(__dirname, `/images/${id}${extension}`
        );

    fetch(url)
    .then((res) => res.arrayBuffer())
    .then((res) => {
        const buffer = Buffer.from(res);

        const writeStream = fs.createWriteStream(filePath);
        writeStream.write(buffer);
    });
    }
});
};

imageFetch()