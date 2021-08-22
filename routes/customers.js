const express = require('express')
const router = express.Router()
const customersCtrl = require('../controllers/customersCtrl')

router.get('/',customersCtrl.apiGetCustomers)
router.get('/:id',customersCtrl.apiGetCustomerById)
router.post('/',customersCtrl.apiPostCustomer)
router.put('/:id',customersCtrl.apiUpdateCustomerById)
router.delete('/:id',customersCtrl.apiDeleteCustomer)

module.exports = router;