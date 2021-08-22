const express = require('express')
const router = express.Router()
const genresCtrl = require('../controllers/genresCtrl')

router.get('/', genresCtrl.apiGetGenres)
router.get('/:id', genresCtrl.apiGetGenreById)
router.put('/:id', genresCtrl.apiUpdateGenreById)
router.post('/', genresCtrl.apiPostGenre)
router.delete('/:id', genresCtrl.apiDeleteGenreById)

module.exports = router