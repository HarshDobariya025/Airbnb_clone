const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

const p1 = 338000;
const p2 = 345000;
console.log(code.substring(p1, p2));
