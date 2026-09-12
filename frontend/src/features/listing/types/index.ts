/**
 * Domain types for the Listing feature.
 * All listing-related types are defined here and imported by components, hooks, and services.
 * Do NOT duplicate these types in other files.
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

export interface RatingCategory {
  name: string
  score: string
}

export interface ListingData {
  listing: Listing
  reviews: Review[]
  nearby: NearbyListing[]
}

export type ModalType = 'amenities' | 'reviews' | null

export type Section = 'photos' | 'amenities' | 'reviews' | 'location'

export interface GuestCounts {
  adults: number
  children: number
}

export interface PhotoTourState {
  isOpen: boolean
  index: number
}

export interface DateRange {
  checkIn: Date | null
  checkOut: Date | null
}

export type CalendarDayState = 'selected' | 'past' | 'default' | 'empty'

export interface CalendarMonth {
  label: string
  offset: number
  days: number
}
