const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array },
  description: String,
  pageCount: Number,
  categories: Array,
  //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Book = mongoose.model('book', bookSchema);

module.exports = {
  Book,
};
