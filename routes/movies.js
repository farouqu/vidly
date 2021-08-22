const express = require('express')
const router = express.Router()
const moviesCtrl = require('../controllers/moviesCtrl')

router.get('/', moviesCtrl.apiGetMovies)
router.get('/:id', moviesCtrl.apiGetMovieById)
router.post('/', moviesCtrl.apiPostMovie)
router.put('/:id', moviesCtrl.apiUpdateMovieById)
router.delete('/:id', moviesCtrl.apiDeleteMovieById)

module.exports = router;