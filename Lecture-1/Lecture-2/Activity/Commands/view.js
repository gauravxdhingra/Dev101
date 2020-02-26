module.exports.view = function view() {
    // console.log("View has been called");
    let src = arguments[0];
    let mode = arguments[1];

    if (mode == "-t") {
        ViewAsTree(src);
    }
    else if (mode == "-f") {
        ViewAsFlatFiles(src);
    } else
        console.log("Wrong Parameters");
};

function ViewAsTree() {
    console.log("View as a tree is working");
}

function ViewAsFlatFiles() {
    console.log("View as flatFile is working");
}