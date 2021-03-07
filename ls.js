const fs = require("fs");

let lsVar = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join("\n"));
    }
  });
};

module.exports = lsVar;
