const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

const p1 = code.indexOf("Dr()");
console.log(code.substring(p1 - 200, p1 + 1000));
