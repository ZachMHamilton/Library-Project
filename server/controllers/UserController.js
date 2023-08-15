const models = require('../models/userModel');

const userController = {};

userController.verifyUser = (req, res, next) => {
  // pull data from body
  const { username, password } = req.body;
  // find matching user
  User.findOne({ username: username })
    .then((obj) => {
      // if it doesnt match
      if (!obj || password !== obj.password) {
        // alert user 
      } else {
        return next();
      }
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = userController;
