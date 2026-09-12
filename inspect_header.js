const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

// Find Header component definition
const p1 = code.indexOf("searchbar-house");
console.log(code.substring(p1 - 200, p1 + 3000));
