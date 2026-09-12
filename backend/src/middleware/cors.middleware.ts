import cors from 'cors'
import { config } from '../config'

/**
 * CORS middleware — only allows requests from the configured frontend origin.
 */
export const corsMiddleware = cors({
  origin: config.frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
})
