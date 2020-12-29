const path = require("path");

console.log("FileName: ", path.basename(__filename));

console.log("Directory: ", path.dirname(__filename));

console.log("extensions: ", path.extname(__filename));

console.log("Parse", path.parse(__filename));

console.log(path.join(__dirname, "server", "index.html"));
