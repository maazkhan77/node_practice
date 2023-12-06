const fs = require("fs");
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("first");

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "from witefile function", (err) => {
    if (err) throw err;
    console.log("operation complete");

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), "\n\n updated from append file", (err) => {
        if (err) throw err;
        console.log("appended");

        fs.rename(path.join(__dirname, 'files', 'reply.txt'),path.join(__dirname, 'files', 'newReply.txt') , (err) => {
            if (err) throw err;
            console.log("rename complete");
          });
      });
  });

//exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
