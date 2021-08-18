import dotenv from 'dotenv'
import express from 'express'
import dbConnection from './config/database.js'

import wordsRoutes from './routes/words.routes.js'

// Create a new express server
const app = express()

// Set environment variables
dotenv.config()

// Database connection
dbConnection()

// Parse request to JSON
app.use(express.json())

// Main route to manage words
app.use('/words', wordsRoutes)

// Listening requests into defined port
app.listen(process.env.PORT, () =>
  console.log(
    `Server listening on port: ${process.env.PORT} ->`,
    new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
  )
)
