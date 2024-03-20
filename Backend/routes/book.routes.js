// routes/book.js
const express = require("express");
const bookRouter = express.Router();
const { BookModel } = require("../models/book.model");
const { auth } = require("../middleware/auth.middleware");
const { access } = require("../middleware/access.middleware");

// Get all books
bookRouter.get('/',async (req, res) => {
    try {
        const { category, author } = req.query;
        let filter = {};
        
        if (category) {
            filter.category = category;
        }
        
        if (author) {
            filter.author = author;
        }
        
        const books = await BookModel.find(filter);
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Protected
bookRouter.use(auth);
// Get book by ID
bookRouter.get("/:id", access(["Admin","User"]), async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add a new book
bookRouter.post("/",access(["Admin"]), async (req, res) => {
  try {
    const book = new BookModel(req.body);
    await book.save();
    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update book by ID
bookRouter.put("/:id",access(["Admin"]) ,async (req, res) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(204).json({ message: "Book updated successfully", book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete book by ID
bookRouter.delete("/:id",access(["Admin"]), async (req, res) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(202).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { bookRouter };
