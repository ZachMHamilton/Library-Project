const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://zachmhamilton:RHC6Lj9TAv7yirPY@library.ru1mdk2.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Library',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: String,
  read: Boolean,
  rating: { type: Number, min: 1, max: 10 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Book = model.mongoose('book', bookSchema);

module.exports = Book;
