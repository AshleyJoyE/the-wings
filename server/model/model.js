const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    company: {
        required: true,
        type: String
    },
    street: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    zipCode: {
        required: true,
        type: String
    },
    state: {
        required: true,
        type: String
    },
    country: {
        required: true,
        type: String
    },
    isInvestment: {
        required: true,
        type: Boolean
    },
    isSaving: {
        required: true,
        type: Boolean
    },
    isTax: {
        required: true,
        type: Boolean
    },
    logo: {
        required: true,
        type: String
    },


})

module.exports = mongoose.model('Data', dataSchema)