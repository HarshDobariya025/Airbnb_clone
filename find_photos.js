const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

let p = 0;
while ((p = code.indexOf('`photos`', p)) !== -1) {
  console.log('Found `photos` at', p);
  console.log(code.substring(p - 200, p + 400));
  console.log('-----------------------------------');
  p += 8;
}
