const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

const p1 = code.indexOf("Become a host");
console.log(code.substring(p1 - 1000, p1 + 1000));
