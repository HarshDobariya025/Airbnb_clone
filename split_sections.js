const fs = require('fs');
const code = fs.readFileSync('./app_code.js', 'utf8');

// Let's dump each section with its exact code and structure
const sections = [
  { name: '01_header_and_navbar', start: 0, end: 12000 },
  { name: '02_photogrid_and_tour', start: 12000, end: 26000 },
  { name: '03_title_summary_highlights_desc', start: 26000, end: 35000 },
  { name: '04_booking_card_and_pricing', start: 35000, end: 45000 },
  { name: '05_where_you_sleep', start: 45000, end: 55000 },
  { name: '06_compact_navbar', start: 50000, end: 65000 },
  { name: '07_amenities_section_and_modal', start: 65000, end: 71500 },
  { name: '08_calendar_section', start: 71500, end: 75800 },
  { name: '09_location_map_section', start: 75800, end: 80500 },
  { name: '10_reviews_guest_favourite_ratings', start: 80500, end: 97500 },
  { name: '11_meet_your_host', start: 97500, end: 99600 },
  { name: '12_things_to_know', start: 99600, end: 101500 },
  { name: '13_more_stays_nearby', start: 101500, end: 103500 },
  { name: '14_main_page_shell', start: 103200, end: code.length },
];

if (!fs.existsSync('./ref_sections')) {
  fs.mkdirSync('./ref_sections');
}

sections.forEach(s => {
  const content = code.substring(s.start, s.end);
  fs.writeFileSync(`./ref_sections/${s.name}.js`, content);
  console.log(`Saved ${s.name} (${content.length} bytes)`);
});
