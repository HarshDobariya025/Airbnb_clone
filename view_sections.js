const fs = require('fs');

const files = fs.readdirSync('./ref_sections');
files.forEach(file => {
  const content = fs.readFileSync(`./ref_sections/${file}`, 'utf8');
  console.log(`\n========================================`);
  console.log(`FILE: ${file} (${content.length} chars)`);
  console.log(`========================================`);
  console.log(content.substring(0, 1500));
});
