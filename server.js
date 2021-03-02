const path = require("path");
const fs = require("fs");

const chirps = [
    {
        user: "Ben",
        chirp: "This is a chirp"
    },
    {
        user: "Ben",
        chirp: "This is a chirp"
    },
    {
        user: "Ben",
        chirp: "This is a chirp"
    },
    {
        user: "Ben",
        chirp: "This is a chirp"
    },
    {
        user: "Ben",
        chirp: "This is a chirp"
    },
];

const filePath = path.join(__dirname, "/chirps.json");

fs.writeFile(filePath, JSON.stringify(chirps), (err) => {
    if(err) {
        console.error(err)
    }
    console.log("Done")
});

fs.readFile(filePath, (err, data) => {
    console.log(JSON.parse(data));

});


