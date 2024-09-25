const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    rateing: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    image:[],
});

const product = mongoose.model('product', productSchema);

module.exports = product;