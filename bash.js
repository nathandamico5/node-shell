let pwd = require("./pwd.js");
let ls = require("./ls.js");
let cat = require("./cat.js");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");
  if (cmd[0] === "ls") {
    ls();
  } else if (cmd[0] === "pwd") {
    pwd();
  } else if (cmd[0] === "cat") {
    let file = cmd[1];
    cat(file);
  }
});
