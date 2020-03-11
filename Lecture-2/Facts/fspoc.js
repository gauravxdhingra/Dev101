let fs = require("fs");
let path = require("path");

function displayList(src) {
    let ans = fs.lstatSync(src).isDirectory();
    if (ans == false) {
        console.log(src + "*");
    } else {
        // directory
        console.log(src);
        let childrens = fs.readdirSync(src);
        // console.log(childrens);
        for (let i = 0; i < childrens.length; i++) {
            let cChPath = path.join(src, childrens[i]);
            displayList(cChPath);
        }
    }
}

displayList("./src");