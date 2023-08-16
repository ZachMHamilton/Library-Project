const models = require('../models/userModel');

const userController = {};

userController.verifyUser = (req, res, next) => {
  // pull data from body
  const { username, password } = req.body;
  // find matching user
  models.User.findOne({ username: username })
    .then((obj) => {
      // if it doesnt match
      if (!obj || password !== obj.password) {
        // alert user
        console.log('password does not match');
      } else {
        return next();
      }
    })
    .catch((err) => {
      return next(err);
    });
};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  models.User.create(req.body)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => {
      console.log('error creating user');
      return next(err);
    });
};

module.exports = userController;
