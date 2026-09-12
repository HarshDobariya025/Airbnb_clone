import {
  Wifi, Laptop, Car, Waves, Bath, Camera,
  CircleAlert, BedDouble, House, ChefHat, PawPrint,
  type LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  Camera,
  CircleAlert,
  BedDouble,
  ChefHat,
  PawPrint,
  House,
}

interface IconProps {
  name: string
  size?: number
}

/**
 * Icon — resolves a string name to a lucide icon component.
 * Falls back to House if the name is not registered.
 * Add new icon mappings here as the amenity list grows.
 */
export function Icon({ name, size = 22 }: IconProps) {
  const Component = ICON_MAP[name] ?? House
  return <Component size={size} strokeWidth={1.6} aria-hidden="true" />
}
