const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        // require: true
    },
    books: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Book',
        // require: true
    }],
    totalAmount: {
        type: Number,
        require: true
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;