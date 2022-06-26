const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// express middleware that helps to parse the body of the request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler) // custom error handler must be placed below routes


app.listen(port, () => console.log(`Server started on port ${port}`))