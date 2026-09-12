/**
 * Global shared types used across the application.
 * Domain-specific types live in their respective feature directories.
 */

/** Generic async result wrapper */
export type ApiResult<T> = Promise<T>

/** Utility types */
export type Nullable<T> = T | null
export type Optional<T> = T | undefined

/** HTTP method literals */
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

/** Base REST endpoint type */
export type RestEndpoint = `/api/${string}`

/** JSON-serializable value */
export type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json }

/** Query string parameters */
export type QueryParams = Record<string, string>
