let pwdVar = (done) => {
  let retVal = process.cwd();

  done(retVal);
};

module.exports = pwdVar;
