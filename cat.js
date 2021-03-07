const fs = require("fs");

let catVar = (file, done) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data);
    }
  });
};

module.exports = catVar;
