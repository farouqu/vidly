const express = require('express')
const router = express.Router()
const rentalsCtrl = require('../controllers/rentalsCtrl')

router.get('/', rentalsCtrl.apiGetRentals)
router.post('/', rentalsCtrl.apiPostRental)

module.exports = router;