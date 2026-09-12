const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

const p1 = code.indexOf("searchbar-house");
console.log("=== HEADER SNIPPET ===");
console.log(code.substring(p1 - 400, p1 + 1200));

const p2 = code.indexOf("Show all photos");
console.log("=== PHOTOS SNIPPET ===");
console.log(code.substring(p2 - 600, p2 + 400));
