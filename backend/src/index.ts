import express from 'express'
import { config } from './config'
import { corsMiddleware } from './middleware/cors.middleware'
import { errorMiddleware } from './middleware/error.middleware'
import { apiRouter } from './routes'

const app = express()

// Middleware
app.use(corsMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: config.nodeEnv })
})

// API routes
app.use('/api', apiRouter)

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found', statusCode: 404 })
})

// Error handler (must be last)
app.use(errorMiddleware)

// Start server
app.listen(config.port, () => {
  console.log(`[backend] Server running on http://localhost:${config.port}`)
  console.log(`[backend] Environment: ${config.nodeEnv}`)
  console.log(`[backend] CORS origin: ${config.frontendUrl}`)
})

export { app }
