/**
 * Backend domain types.
 * These mirror the frontend types but are defined independently to maintain
 * a clear backend/frontend boundary. A shared types package can be extracted later.
 */

export interface Photo {
  src: string
  alt: string
  room: string
  caption: string
}

export interface Amenity {
  name: string
  icon: string
  unavailable?: boolean
}

export interface NearbyListing {
  title: string
  location: string
  price: string
  rating: string
  image: string
}

export interface Host {
  name: string
  years: string
  image: string
}

export interface Listing {
  id: string
  title: string
  location: string
  type: string
  guests: number
  bedrooms: number
  beds: number
  baths: number
  rating: string
  reviews: number
  price: string
  dates: string
  host: Host
  photos: Photo[]
  amenities: Amenity[]
  nearby: NearbyListing[]
}

export interface Review {
  name: string
  initial: string
  text: string
  when: string
  score: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface ApiError {
  success: false
  message: string
  statusCode: number
}

export interface PaginatedResponse<T> {
  data: T[]
  page: number
  totalPages: number
  total: number
}
