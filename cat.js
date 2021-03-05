const fs = require("fs");

let catVar = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write("prompt > ");
    }
  });
};

module.exports = catVar;
