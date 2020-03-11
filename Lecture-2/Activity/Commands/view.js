let fs = require("fs");
let path = require("path");

module.exports.view = function view() {
    // console.log("View has been called");
    let src = arguments[0];
    let mode = arguments[1];

    if (mode == "-t") {
        ViewAsTree("",src);
    }
    else if (mode == "-f") {
        ViewAsFlatFiles(src);


    } else
        console.log("Wrong Parameters");
};

function ViewAsTree(indent, src) {
    // console.log("View as a tree is working");

    let ans = fs.lstatSync(src).isDirectory();
    if (ans == false) {
        console.log(indent + path.basename(src) + "*");
    } else {
        // directory
        console.log(indent + path.basename(src));
        let childrens = fs.readdirSync(src);
        // console.log(childrens);
        for (let i = 0; i < childrens.length; i++) {
            let cChPath = path.join(src, childrens[i]);
            ViewAsTree(indent + "\t" ,cChPath);
        }
    }


    // ViewAsTree(" "+"/home/gauravxd/Documents/tpp/Dev101/Lecture-2/Facts/src");
}



function ViewAsFlatFiles(src) {
    // console.log(src)
    let ans = fs.lstatSync(src).isDirectory();
    if (ans == false) {
        console.log(path.basename(src) + "*");
    } else {
        // directory
        console.log(src);
        let childrens = fs.readdirSync(src);
        // console.log(childrens);
        for (let i = 0; i < childrens.length; i++) {
            let cChPath = path.join((src), childrens[i]);
            ViewAsFlatFiles(cChPath);
        }
    }


    // ViewAsFlatFiles(" " +"/home/gauravxd/Documents/tpp/Dev101/Lecture-2/Facts/src");
}