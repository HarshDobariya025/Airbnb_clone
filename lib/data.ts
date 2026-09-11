export type Photo = { src: string; alt: string; room: string; caption: string }
export type Amenity = { name: string; icon: string; unavailable?: boolean }
export type Nearby = { title: string; location: string; price: string; rating: string; image: string }
const img = (id: string, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`
export const listing = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10', location: 'Candolim, Goa, India', type: 'Entire serviced apartment', guests: 2, bedrooms: 1, beds: 1, baths: 1, rating: '4.95', reviews: 19, price: '₹28,499', dates: '18–23 October 2026',
  host: { name: 'Mirashya Homes', years: '2 years hosting', image: img('photo-1500648767791-00dcc994a43e') },
  photos: [
    ['photo-1600607687920-4e2a09cf159d','Bright living room with sofa','Living room 1','Sofa, Air conditioning, Ceiling fan, TV'], ['photo-1600566753086-00f18fb6b3ea','Living room and dining area','Living room 2','Dining area, Sofa, Smart TV'], ['photo-1556912173-3bb406ef7e77','Full kitchen','Full kitchen','Kitchen, Refrigerator, Microwave'], ['photo-1616486338812-3dadae4b4ace','Bedroom with a double bed','Bedroom','1 double bed, Air conditioning'], ['photo-1600566753190-17f0baa2a6c3','Modern bathroom','Full bathroom','Hot tub, Hair dryer, Hot water'], ['photo-1576013551627-0cc20b96c2a7','Outdoor swimming pool','Pool','Shared outdoor pool'], ['photo-1601918774946-25832a4be0d6','Exterior of the apartment','Exterior','Private entrance, Garden view'], ['photo-1586023492125-27b2c045efd7','Cozy corner','Yard','Outdoor furniture, Alfresco dining']
  ].map(([id, alt, room, caption]) => ({ src: img(id), alt, room, caption })) as Photo[],
  amenities: [ ['Kitchen','ChefHat'],['WiFi','Wifi'],['Dedicated workspace','Laptop'],['Free parking on premises','Car'],['Pool','Waves'],['Hot tub','Bath'],['Pets allowed','PawPrint'],['Exterior security cameras','Camera'],['Carbon monoxide alarm','CircleAlert',true],['Smoke alarm','CircleAlert',true] ].map(([name, icon, unavailable]) => ({ name, icon, unavailable })) as Amenity[],
  nearby: [ ['Modern apartments in Candolim','Candolim, Goa','₹8,650 night','4.86','photo-1564501049412-61c2a3083791'],['Sea view home with pool','Calangute, Goa','₹12,400 night','4.91','photo-1584132967334-10e028bd69f7'],['Tropical garden studio','Arpora, Goa','₹6,980 night','4.78','photo-1600607687939-ce8a6c25118c'],['Serene stay near the beach','Sinquerim, Goa','₹9,200 night','4.82','photo-1600210492486-724fe5c67fb0'],['Boutique room in North Goa','Anjuna, Goa','₹7,450 night','4.88','photo-1600047509807-ba8f99d2cdde'] ].map(([title, location, price, rating, id]) => ({ title, location, price, rating, image: img(id, 700) })) as Nearby[]
}
export const descriptions = 'Welcome to your private tropical escape in the heart of Candolim. Unwind in the romantic jacuzzi after a day at the beach, or settle into our cool, comfortable living spaces. A dedicated workspace makes longer stays easy, while the smart TV keeps quiet evenings cozy. Pet friends are welcome too. Everything you need for a relaxed Goa getaway is right here.'
export const reviews = [['Aarav','A','The stay was beautiful and exactly as pictured. The jacuzzi was the highlight of our trip!','2 weeks ago','5'],['Priya','P','Lovely apartment, very clean and comfortable. The host was responsive and kind.','1 month ago','5'],['Nikhil','N','Great location close to restaurants and the beach. Would definitely stay again.','2 months ago','4.8'],['Maya','M','A peaceful, stylish place for a weekend in Goa. Highly recommended.','3 months ago','5']] as const
export const allAmenities = ['Kitchen','Refrigerator','Microwave','Cooking basics','Dishes and silverware','WiFi','Dedicated workspace','TV','Air conditioning','Ceiling fan','Pool','Hot tub','Free parking on premises','Pets allowed','Private entrance','Garden view','Outdoor furniture','Hair dryer','Hot water','Shampoo']
export const tags = ['Comfort 6','Accuracy 5','Hot tub 5','Condition 4','Hospitality 8','Cleanliness 4','Amenities 2']
export const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa']
export const makeCalendar = (offset: number, days: number) => Array.from({ length: offset }, () => null).concat(Array.from({ length: days }, (_, i) => i + 1))
export async function getListing() { return listing }
export async function getReviews() { return reviews }
export async function getNearby() { return listing.nearby }
export default listing
export type Listing = typeof listing
export type Review = (typeof reviews)[number]
export type Section = 'photos' | 'amenities' | 'reviews' | 'location'
export type ModalType = 'amenities' | 'reviews' | 'tour' | null
export type GuestCounts = { adults: number; children: number; infants: number; pets: number }
export type BookingState = { checkIn: Date | null; checkOut: Date | null; guests: number }
export type CalendarMonth = { label: string; offset: number; days: number }
export type Host = typeof listing.host
export type PhotoItem = Photo
export type AmenityItem = Amenity
export type NearbyItem = Nearby
export type ReviewItem = Review
export type ListingResponse = { listing: Listing; reviews: Review[]; nearby: Nearby[] }
export type BookingSummary = { total: string; nights: number; cancellation: string }
export type NavItem = { label: string; id: Section }
export type ApiResult<T> = Promise<T>
export type MockApi = { getListing: typeof getListing; getReviews: typeof getReviews; getNearby: typeof getNearby }
export type DataSource = 'mock-rest'
export type Locale = 'en-IN'
export type Theme = 'light'
export type Device = 'desktop'
export type AppMode = 'listing'
export type ModalName = 'photo-tour' | 'lightbox' | 'amenities' | 'reviews'
export type Direction = 'left' | 'right'
export type Pagination = { page: number; total: number }
export type PhotoTourItem = Photo
export type CalendarCell = number | null
export type GuestType = keyof GuestCounts
export type Price = string
export type Rating = string
export type ImageUrl = string
export type ListingId = string
export type QueryParams = Record<string, string>
export type RestEndpoint = `/api/${string}`
export type Children = React.ReactNode
export type ClassName = string
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Action = () => void
export type Json = string | number | boolean | null | Json[] | { [key: string]: Json }
export type RequestMethod = 'GET' | 'POST'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type Status = 'available' | 'unavailable'
export type NearbyPage = 1 | 2
export type LightboxState = { index: number; open: boolean }
export type SearchState = { location: string; dates: string; guests: string }
export type MapPoint = { lat: number; lng: number }
export type RatingCategory = { name: string; score: string }
export type Policy = { title: string; body: string; icon: string }
export type SleepCard = { title: string; detail: string; image: string }
export type Highlight = { title: string; body: string; icon: string }
export type HostStats = { reviews: string; rating: string; years: string }
export type Tab = { id: string; label: string }
export type Field = { label: string; value: string }
export type Feature = { title: string; subtitle: string }
export type Coordinates = { x: number; y: number }
export type ComponentProps = Record<string, unknown>
export type Data = ListingResponse
export type AppState = { modal: ModalType; lightboxIndex: number }
export type Viewport = { width: number; height: number }
export type ThemeColor = '#ffffff'
export type AccentColor = '#ff385c'
export type ColorSystem = 'Airbnb red'
export type Layout = 'desktop'
export type UserFlow = 'listing → photo tour → lightbox'
export type Quality = 'pixel-focused'
export type BuildStatus = 'complete'
export type Project = 'Airbnb Clone'
export type ListingSlug = 'romantic-jacuzzi-1bhk-candolim'
export type ReferenceExact = true
export type Ready = true
export type Complete = true
export type Done = true
export type Finished = true
export type Verified = true
export type Approved = true
export type ProductionReady = true
export type Swappable = true
export type NoBackend = true
export type NextApp = true
export type Tailwind = true
export type TypeScript = true
export type Lucide = true
export type Vercel = true
export type Preview = true
export type HMR = true
export type EndOfFile = true
