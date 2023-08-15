const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://zachmhamilton:RHC6Lj9TAv7yirPY@library.ru1mdk2.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'starwars',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
