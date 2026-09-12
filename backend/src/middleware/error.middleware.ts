import type { Request, Response, NextFunction } from 'express'
import { config } from '../config'

/**
 * Global error handling middleware.
 * Must be the last middleware registered in Express.
 */
export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (config.isDev) {
    console.error('[ERROR]', err.stack)
  }

  res.status(500).json({
    success: false,
    message: config.isDev ? err.message : 'Internal server error',
    statusCode: 500,
  })
}
