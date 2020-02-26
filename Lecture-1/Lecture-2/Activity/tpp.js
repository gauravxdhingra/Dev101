let cmd = process.argv[2];
let src = process.argv[3];
let mode = process.argv[4];

let viewFile = require("./Commands/view");
let treefyFile = require("./Commands/treefy");
let untreefyFile = require("./Commands/untreefy");
let monitorFile = require("./Commands/monitor");
let helpFile = require("./Commands/help");


switch (cmd) {
    case "view":
        // console.log("View has been called");
        viewFile.view(src,mode);
        break;

    case "treefy":
        // console.log("Treefy has been called");
        treefyFile.treefy(src,mode);
        break;

    case "untreefy":
        // console.log("Untreefy has been called");
        untreefyFile.untreefy(src,mode);
        break;

    case "monitor":
        // console.log("Monitor has been called");
        monitorFile.monitor(src,mode);
        break;

    case "help":
        // console.log("Help has been called");
        helpFile.help();
        break;

    default:
        console.log("Wrong command");
        break;
}