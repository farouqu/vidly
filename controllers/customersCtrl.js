const Customer = require('../models/customer')

const customerCtrl = {
    apiGetCustomers: async (req, res) => {
        const custs = await Customer.find().sort("name");

        res.send(custs)
    },
    apiGetCustomerById: async (req, res) => {
        const cust = await Customer.findById(req.params.id);

        res.send(cust)
    },
    apiPostCustomer: async (req, res) => {
        let customer = new Customer({
            isGold: req.body.isGold,
            name: req.body.name,
            phone: req.body.phone
        })

        const result = await customer.save()

        res.send(result)
    },
    apiUpdateCustomerById: async (req, res) => {
        const cust = await Customer.findByIdAndUpdate(req.params.id, {
            isGold: req.body.isGold,
            name: req.body.name,
            phone: req.body.phone
        }, { new: true })

        if (!cust) res.status(404).send("The customer with this ID was not found")

        res.send(cust)
    },
    apiDeleteCustomer: async (req, res) => {
        const result = await Customer.findByIdAndRemove(req.params.id)

        if (!result) res.status(404).send("The customer with this ID was not found")

        res.send(result)
    }
}

module.exports = customerCtrl;