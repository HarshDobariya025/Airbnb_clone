import type { Response } from 'express'
import type { ApiResponse, ApiError } from '../types'

/**
 * Sends a successful JSON response.
 */
export function sendSuccess<T>(res: Response, data: T, statusCode = 200): void {
  const response: ApiResponse<T> = {
    data,
    success: true,
  }
  res.status(statusCode).json(response)
}

/**
 * Sends an error JSON response.
 */
export function sendError(res: Response, message: string, statusCode = 500): void {
  const response: ApiError = {
    success: false,
    message,
    statusCode,
  }
  res.status(statusCode).json(response)
}
