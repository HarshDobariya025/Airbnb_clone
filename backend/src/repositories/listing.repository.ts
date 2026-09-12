import type { Listing, Review, NearbyListing } from '../types'

const img = (id: string, w = 1000): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

/**
 * Listing repository — the data access layer.
 * Currently uses in-memory data. Replace with a database client here when ready.
 * Controllers and services must never access data directly — only through this repository.
 */

const LISTINGS: Listing[] = [
  {
    id: 'romantic-jacuzzi-1bhk-candolim',
    title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
    location: 'Candolim, Goa, India',
    type: 'Entire serviced apartment',
    guests: 2, bedrooms: 1, beds: 1, baths: 1,
    rating: '4.95', reviews: 19, price: '₹28,499', dates: '18–23 October 2026',
    host: {
      name: 'Mirashya Homes', years: '2 years hosting',
      image: img('photo-1500648767791-00dcc994a43e'),
    },
    photos: [
      { src: img('photo-1600607687920-4e2a09cf159d'), alt: 'Bright living room',     room: 'Living room 1', caption: 'Sofa, AC, TV' },
      { src: img('photo-1600566753086-00f18fb6b3ea'), alt: 'Living room and dining', room: 'Living room 2', caption: 'Dining area, Smart TV' },
      { src: img('photo-1556912173-3bb406ef7e77'),   alt: 'Full kitchen',            room: 'Full kitchen',  caption: 'Kitchen, Refrigerator, Microwave' },
      { src: img('photo-1616486338812-3dadae4b4ace'), alt: 'Bedroom',                room: 'Bedroom',       caption: '1 double bed, AC' },
      { src: img('photo-1600566753190-17f0baa2a6c3'), alt: 'Modern bathroom',        room: 'Full bathroom', caption: 'Hot tub, Hair dryer, Hot water' },
      { src: img('photo-1576013551627-0cc20b96c2a7'), alt: 'Outdoor pool',           room: 'Pool',          caption: 'Shared outdoor pool' },
      { src: img('photo-1601918774946-25832a4be0d6'), alt: 'Exterior',               room: 'Exterior',      caption: 'Private entrance, Garden view' },
      { src: img('photo-1586023492125-27b2c045efd7'), alt: 'Cozy corner',            room: 'Yard',          caption: 'Outdoor furniture, Alfresco dining' },
    ],
    amenities: [
      { name: 'Kitchen', icon: 'ChefHat' },
      { name: 'WiFi', icon: 'Wifi' },
      { name: 'Dedicated workspace', icon: 'Laptop' },
      { name: 'Free parking on premises', icon: 'Car' },
      { name: 'Pool', icon: 'Waves' },
      { name: 'Hot tub', icon: 'Bath' },
      { name: 'Pets allowed', icon: 'PawPrint' },
      { name: 'Exterior security cameras', icon: 'Camera' },
      { name: 'Carbon monoxide alarm', icon: 'CircleAlert', unavailable: true },
      { name: 'Smoke alarm', icon: 'CircleAlert', unavailable: true },
    ],
    nearby: [
      { title: 'Modern apartments in Candolim', location: 'Candolim, Goa', price: '₹8,650 night',  rating: '4.86', image: img('photo-1564501049412-61c2a3083791', 700) },
      { title: 'Sea view home with pool',       location: 'Calangute, Goa', price: '₹12,400 night', rating: '4.91', image: img('photo-1584132967334-10e028bd69f7', 700) },
      { title: 'Tropical garden studio',        location: 'Arpora, Goa',   price: '₹6,980 night',  rating: '4.78', image: img('photo-1600607687939-ce8a6c25118c', 700) },
      { title: 'Serene stay near the beach',    location: 'Sinquerim, Goa', price: '₹9,200 night',  rating: '4.82', image: img('photo-1600210492486-724fe5c67fb0', 700) },
      { title: 'Boutique room in North Goa',    location: 'Anjuna, Goa',   price: '₹7,450 night',  rating: '4.88', image: img('photo-1600047509807-ba8f99d2cdde', 700) },
    ],
  },
]

const REVIEWS: Record<string, Review[]> = {
  'romantic-jacuzzi-1bhk-candolim': [
    { name: 'Aarav', initial: 'A', text: 'The stay was beautiful and exactly as pictured. The jacuzzi was the highlight of our trip!', when: '2 weeks ago', score: '5' },
    { name: 'Priya', initial: 'P', text: 'Lovely apartment, very clean and comfortable. The host was responsive and kind.', when: '1 month ago', score: '5' },
    { name: 'Nikhil', initial: 'N', text: 'Great location close to restaurants and the beach. Would definitely stay again.', when: '2 months ago', score: '4.8' },
    { name: 'Maya', initial: 'M', text: 'A peaceful, stylish place for a weekend in Goa. Highly recommended.', when: '3 months ago', score: '5' },
  ],
}

export const listingRepository = {
  findById(id: string): Listing | undefined {
    return LISTINGS.find((l) => l.id === id)
  },

  findAll(): Listing[] {
    return LISTINGS
  },

  findReviews(listingId: string): Review[] {
    return REVIEWS[listingId] ?? []
  },

  findNearby(listingId: string): NearbyListing[] {
    return listingRepository.findById(listingId)?.nearby ?? []
  },
}
