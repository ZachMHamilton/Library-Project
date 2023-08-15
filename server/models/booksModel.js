const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // genre: String,
  // read: Boolean,
  // rating: { type: Number, min: 1, max: 10 },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Book = mongoose.model('book', bookSchema);

module.exports = {
  Book,
};
