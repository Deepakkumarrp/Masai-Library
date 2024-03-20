const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    books: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Book',
    }],
    totalAmount: {
        type: Number,
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = {Order};