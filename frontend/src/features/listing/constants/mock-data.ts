import type { Listing, Review, NearbyListing, Photo, Amenity } from '../types'

const img = (id: string, w = 1000): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

const PHOTOS: Photo[] = [
  { src: '/listing-photos/photo-1.jpg', alt: 'Outdoor patio with rattan lounge set and stone wall', room: 'Patio & Lounge', caption: 'Spacious outdoor patio with jacuzzi and stylish seating' },
  { src: '/listing-photos/photo-2.jpg', alt: 'Outdoor seating lounge area', room: 'Patio & Lounge', caption: 'Comfortable rattan sofa set with coffee table' },
  { src: '/listing-photos/photo-4.jpg', alt: 'Private jacuzzi tub with wood surround', room: 'Jacuzzi', caption: 'Private heated jacuzzi tub with ambient wall lighting' },
  { src: '/listing-photos/photo-3.jpg', alt: 'Bedroom with a double bed', room: 'Bedroom', caption: '1 double bed, air conditioning, floor-to-ceiling mirror' },
  { src: '/listing-photos/photo-5.jpg', alt: 'Exterior view of Amor de Goa building', room: 'Building Exterior', caption: 'Amor de Goa modern luxury apartment complex in Candolim' },
  { src: img('photo-1576013551627-0cc20b96c2a7'), alt: 'Outdoor swimming pool', room: 'Pool', caption: 'Shared outdoor pool' },
  { src: img('photo-1601918774946-25832a4be0d6'), alt: 'Exterior of the apartment', room: 'Exterior', caption: 'Private entrance, Garden view' },
  { src: img('photo-1586023492125-27b2c045efd7'), alt: 'Cozy corner', room: 'Yard', caption: 'Outdoor furniture, Alfresco dining' },
]

const AMENITIES: Amenity[] = [
  ['Kitchen',                        'ChefHat'],
  ['WiFi',                           'Wifi'],
  ['Dedicated workspace',            'Laptop'],
  ['Free parking on premises',       'Car'],
  ['Pool',                           'Waves'],
  ['Hot tub',                        'Bath'],
  ['Pets allowed',                   'PawPrint'],
  ['Exterior security cameras',      'Camera'],
  ['Carbon monoxide alarm',          'CircleAlert', true],
].map(([name, icon, unavailable]) => ({ name: String(name), icon: String(icon), unavailable: Boolean(unavailable) }))

const NEARBY: NearbyListing[] = [
  ['Modern apartments in Candolim', 'Candolim, Goa', '₹8,650 night',  '4.86', 'photo-1564501049412-61c2a3083791'],
  ['Sea view home with pool',       'Calangute, Goa', '₹12,400 night', '4.91', 'photo-1584132967334-10e028bd69f7'],
  ['Tropical garden studio',        'Arpora, Goa',   '₹6,980 night',  '4.78', 'photo-1600607687939-ce8a6c25118c'],
  ['Serene stay near the beach',    'Sinquerim, Goa', '₹9,200 night',  '4.82', 'photo-1600210492486-724fe5c67fb0'],
  ['Boutique room in North Goa',    'Anjuna, Goa',   '₹7,450 night',  '4.88', 'photo-1600047509807-ba8f99d2cdde'],
].map(([title, location, price, rating, id]) => ({
  title, location, price, rating, image: img(id, 700),
}))

export const MOCK_LISTING: Listing = {
  id: 'romantic-jacuzzi-1bhk-candolim',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  location: 'Candolim, Goa, India',
  type: 'Entire serviced apartment',
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  rating: '4.95',
  reviews: 19,
  price: '₹28,499',
  dates: '18–23 October 2026',
  host: {
    name: 'Mirashya Homes',
    years: '2 years hosting',
    image: img('photo-1500648767791-00dcc994a43e'),
  },
  photos: PHOTOS,
  amenities: AMENITIES,
  nearby: NEARBY,
}

export const MOCK_REVIEWS: Review[] = [
  {
    name: 'Aarav', initial: 'A',
    text: 'The stay was beautiful and exactly as pictured. The jacuzzi was the highlight of our trip!',
    when: '2 weeks ago', score: '5',
  },
  {
    name: 'Priya', initial: 'P',
    text: 'Lovely apartment, very clean and comfortable. The host was responsive and kind.',
    when: '1 month ago', score: '5',
  },
  {
    name: 'Nikhil', initial: 'N',
    text: 'Great location close to restaurants and the beach. Would definitely stay again.',
    when: '2 months ago', score: '4.8',
  },
  {
    name: 'Maya', initial: 'M',
    text: 'A peaceful, stylish place for a weekend in Goa. Highly recommended.',
    when: '3 months ago', score: '5',
  },
]

export const ALL_AMENITIES: string[] = [
  'Kitchen', 'Refrigerator', 'Microwave', 'Cooking basics', 'Dishes and silverware',
  'WiFi', 'Dedicated workspace', 'TV', 'Air conditioning', 'Ceiling fan',
  'Pool', 'Hot tub', 'Free parking on premises', 'Pets allowed', 'Private entrance',
  'Garden view', 'Outdoor furniture', 'Hair dryer', 'Hot water', 'Shampoo',
]

export const REVIEW_TAGS: string[] = [
  'Comfort 6', 'Accuracy 5', 'Hot tub 5', 'Condition 4',
  'Hospitality 8', 'Cleanliness 4', 'Amenities 2',
]

export const LISTING_DESCRIPTION =
  'Welcome to your private tropical escape in the heart of Candolim. Unwind in the romantic ' +
  'jacuzzi after a day at the beach, or settle into our cool, comfortable living spaces. A ' +
  'dedicated workspace makes longer stays easy, while the smart TV keeps quiet evenings cozy. ' +
  'Pet friends are welcome too. Everything you need for a relaxed Goa getaway is right here.'

export const CALENDAR_MONTHS: Array<{ label: string; offset: number; days: number }> = [
  { label: 'October 2026',  offset: 4, days: 31 },
  { label: 'November 2026', offset: 0, days: 30 },
]

export const RATING_CATEGORIES = [
  { name: 'Cleanliness',    score: '4.9' },
  { name: 'Accuracy',       score: '4.8' },
  { name: 'Check-in',       score: '4.8' },
  { name: 'Communication',  score: '4.8' },
  { name: 'Location',       score: '4.8' },
  { name: 'Value',          score: '4.8' },
]
