const express = require('express')
const mongoose = require('mongoose')
const app = express()
const genres = require('./routes/genres')
const customers = require('./routes/customers')
const movies = require('./routes/movies')
const rentals = require('./routes/rentals')

mongoose.connect("your connection url")
    .then(() => console.log("Connected to Mongo DB - Vidly "))
    .catch((err) => console.error("Couldn't connect", err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/genres', genres)
app.use('/api/customers', customers)
app.use('/api/movies', movies)
app.use('/api/rentals', rentals)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`))