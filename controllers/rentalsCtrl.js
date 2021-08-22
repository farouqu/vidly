const Rental = require('../models/rental')
const Customer = require('../models/customer')
const Movie = require('../models/movie')


const rentalsCtrl = {
    apiGetRentals: async (req, res) => {
        const rentals = await Rental.find().sort('-dateOut')

        res.send(rentals)
    },
    apiPostRental: async (req, res) => {
        const customer = await Customer.findById(req.body.customerId)
        if (!customer) res.status(400).send("Invalid Customer")

        const movie = await Movie.findById(req.body.movieId)
        if (!movie) res.status(400).send("Invalid Movie")

        if (movie.numberInStock === 0) res.status(400).send("There is no copy available")

        let rental = new Rental({
            customer: {
                _id: customer._id,
                name: customer.name,
                isGold: customer.isGold,
                phone: customer.phone
            },
            movie: {
                _id: movie._id,
                title: movie.title,
                dailyRentalRate: movie.dailyRentalRate
            }
        })

        rental = await rental.save()
        movie.numberInStock--;
        await movie.save()

        res.send(rental)
    }
}

module.exports = rentalsCtrl;