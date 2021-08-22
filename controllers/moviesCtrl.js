const Movie = require('../models/movie')
const { Genre } = require('../models/genre')

const moviesCtrl = {
    apiGetMovies: async (req, res) => {
        const movies = await Movie.find().sort({ title: 1 })

        res.send(movies)

    },
    apiGetMovieById: async (req, res) => {
        const movie = await Movie.findById(req.params.id);

        res.send(movie)

    },
    apiPostMovie: async (req, res) => {
        const genre = await Genre.findById(req.body.genreId)
        if (!genre) res.status(404).send("Invalid genre")

        const movie = new Movie({
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        })

        const result = await movie.save()
        res.send(result)

    },
    apiUpdateMovieById: async (req, res) => {
        const movie = await Movie.findById(req.params.id)
        if (!movie) res.status(404).send("The movie with this ID was not found")

        const genre = await Genre.findById(req.body.genreId)
        if (!genre) res.status(404).send("Invalid genre")

        movie.title = req.body.title
        movie.genre = { _id: genre._id, name: genre.name }
        movie.numberInStock = req.body.numberInStock
        movie.dailyRentalRate = req.body.dailyRentalRate

        const result = await movie.save()
        res.send(result)

    },
    apiDeleteMovieById: async (req, res) => {
        const result = await Movie.findByIdAndRemove(req.params.id)

        if (!result) res.status(404).send("The course with this ID wasn't found")

        res.send(result)

    }
}

module.exports = moviesCtrl;