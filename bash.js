let pwd = require("./pwd.js");
let ls = require("./ls.js");
let cat = require("./cat.js");
let curl = require("./curl.js");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");
  if (cmd[0] === "ls") {
    ls(done);
  } else if (cmd[0] === "pwd") {
    pwd(done);
  } else if (cmd[0] === "cat") {
    let file = cmd[1];
    cat(file, done);
  } else if (cmd[0] === "curl") {
    let url = cmd[1];
    curl(url, done);
  }
});
