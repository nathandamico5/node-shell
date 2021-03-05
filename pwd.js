let pwdVar = () => {
  let retVal = process.cwd();

  process.stdout.write(retVal);
  process.stdout.write("\nprompt > ");
};

module.exports = pwdVar;
