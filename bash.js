let pwd = require('./pwd.js')
let ls = require('./ls.js')

process.stdout.write('prompt > ');
process.stdin.on('data', ls);
