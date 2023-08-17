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
        // something
        console.log('password does not match');
        return next(err);
      } else {
        return next();
      }
    })
    .catch((err) => {
      console.log('err in verify', err);
      return next(err);
    });
};

userController.createUser = (req, res, next) => {
  // get username/password
  const { username, password } = req.body;
  models.User.create(req.body)
    .then((data) => {
      if (!username || !password) {
        return next(err);
      }
      return next();
    })
    .catch((err) => {
      console.log('error creating user');
      return next(err);
    });
};

module.exports = userController;
