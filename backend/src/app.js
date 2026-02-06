const express = require('express')
const cors = require('cors')
const router = require('./router/product.route')
const paymentRouter = require('./router/payment.routes.js')

const app = express()

// Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(express.json())

app.use('/', router)
app.use('/', paymentRouter)

module.exports = app