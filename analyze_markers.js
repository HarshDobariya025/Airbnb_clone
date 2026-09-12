const fs = require('fs');
const code = fs.readFileSync('./app_code.js', 'utf8');

// Look for functions or components:
// e.g. name = ({...}) => or function name(...)
console.log('App code length:', code.length);

// Let's find all instances of =({ or =function or function
// In minified Vite/esbuild bundle, components look like:
// const X = ({ ... }) => ...
// or X = ({ ... }) => ...
const compRegex = /([a-zA-Z0-9_$]+)=(\([a-zA-Z0-9_$,\s={}:`"'-]*\)=>|\([^)]*\)=>[^{]*\{|function\s*\([a-zA-Z0-9_$,\s={}:`"'-]*\)\s*\{)/g;

// Let's search for specific known sections in app_code
const markers = [
  'Airbnb Cereal',
  'Romantic Jacuzzi',
  'Show all photos',
  'Entire serviced apartment',
  'Guest favourite',
  'Hosted by Mirashya Homes',
  'Outdoor entertainment',
  'Some info has been automatically translated',
  'Plan Your Relaxing Holiday',
  'Where you',
  'What this place offers',
  'nights in Candolim',
  'Overall rating',
  'Where you’ll be',
  'Where you\'ll be',
  'Meet your host',
  'Things to know',
  'More stays nearby',
  'Get 10% off your next stay'
];

markers.forEach(m => {
  const idx = code.indexOf(m);
  console.log(`Marker "${m}": ${idx}`);
});
