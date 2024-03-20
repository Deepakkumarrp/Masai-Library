const express = require("express");
const orderRouter = express.Router();
const { Order } = require("../models/order.model");
const { auth } = require("../middleware/auth.middleware");

orderRouter.post('/', auth, async (req, res) => {
    try {
      const {userID } = req;
      const { books, totalAmount } = req.body;

      const order = new Order({ user : userID, books, totalAmount });
      await order.save();
      res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  
orderRouter.get('/', auth, async (req, res) => {
    try {
      const orders = await Order.find().populate('user').populate('books');
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});

module.exports = {
    orderRouter
}
  