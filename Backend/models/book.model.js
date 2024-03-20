const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    // required: true
  },
  author: {
    type: String,
    // required: true
  },
  category: {
    type: String,
    // required: true
  },
  price: {
    type: Number,
    // required: true,
    min: 0
  },
  quantity: {
    type: Number,
    min:0,
    // required: true
  }
},{
    versionKey: false
});

const BookModel = mongoose.model("book", bookSchema);

module.exports = {
  BookModel
};