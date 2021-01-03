const fs = require("fs"); // file system
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Directory is made");
// });

const filePath = path.join(__dirname, "test", "text.txt");

// fs.writeFile(filePath, "Hello World!", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File is made");
// });

// fs.appendFile(filePath, "\nHello World, again!", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File is made");
// });

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log(content);
  //   const data = Buffer.from(content);
  //   console.log("Content: ", data.toString());
});
