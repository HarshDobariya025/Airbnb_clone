const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

// The application code starts around 235000
const appCode = code.substring(235000);
fs.writeFileSync('./app_code.js', appCode);
console.log('App code saved, length:', appCode.length);
