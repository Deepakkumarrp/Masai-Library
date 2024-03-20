const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
    },
    books: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'book',
    }],
    totalAmount: {
        type: Number,
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = {Order};