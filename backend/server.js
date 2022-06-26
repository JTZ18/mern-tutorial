const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000


connectDB()

const app = express()

// express middleware that helps to parse the body of the request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler) // custom error handler must be placed below routes


app.listen(port, () => console.log(`Server started on port ${port}`))