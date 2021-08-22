const mongoose = require('mongoose')

const movieInRental = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0
    }
})

const custInRental = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        required: true,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
})

const rentalSchema = new mongoose.Schema({
    customer: {
        type: custInRental,
        required: true
    },
    movie: {
        type: movieInRental,
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0
    }
})

const Rental = mongoose.model('Actor',rentalSchema)

module.exports = Rental;