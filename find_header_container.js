const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

const p1 = code.indexOf("searchbar-house");
console.log(code.substring(p1 - 700, p1 + 400));
