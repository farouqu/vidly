const { Genre } = require('../models/genre');

const genresCtrl = {
    apiGetGenres: async (req, res) => {
        const genres = await Genre.find().sort({ name: 1 })

        res.send(genres)
    },
    apiGetGenreById: async (req, res) => {
        const id = req.params.id;

        const genre = await Genre.findById(id)

        res.send(genre)
    },
    apiPostGenre: async (req, res) => {
        let genre = new Genre({
            name: req.body.name
        })

        const result = await genre.save()

        res.send(result)
    },
    apiUpdateGenreById: async (req, res) => {
        let genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })

        if (!genre) res.status(404).send("The course with this ID wasn't found")

        res.send(genre)
    },
    apiDeleteGenreById: async (req, res) => {
        const genre = await Genre.findByIdAndRemove(req.params.id)

        if (!genre) res.status(404).send("The course with this ID wasn't found")

        res.send(genre)
    }
}

module.exports = genresCtrl;