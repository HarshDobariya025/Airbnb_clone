const fs = require('fs');
const code = fs.readFileSync('./scratch_ref.js', 'utf8');

// Let's find all component definitions
// In React bundled with Vite / esbuild / rollup, components are functions returning JSX or assigned to variables
// Let's find all function declarations or arrow functions
// Also let's inspect the App component or Listing page component
const pApp = code.indexOf('id:"photos"');
console.log('Index of id:"photos":', pApp);
if (pApp !== -1) {
  console.log('=== AROUND id:"photos" ===');
  console.log(code.substring(pApp - 1000, pApp + 2000));
}
