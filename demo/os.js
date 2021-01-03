const os = require("os");

console.log("Operation System:", os.platform());

console.log("Processor Architecture: ", os.arch());

console.log("Information about processors:", os.cpus());

console.log("Free Memory: ", os.freemem());

console.log("Total Memory: ", os.totalmem());

console.log("Home Directory: ", os.homedir());

console.log("SwitchedOn: ", os.uptime());
