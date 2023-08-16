const models = require('../models/userModel');

const cookieController = {};

// works
cookieController.setSSIDCookie = (req, res, next) => {
  // get username
  const { username } = req.body;
  models.User.findOne({ username: username })
    .then((obj) => {
      // if user exists
      if (obj) {
        // create cookie with their id
        res.cookie('ssid', obj._id, { httpOnly: true });
        // res.locals.id = obj._id;
        return next();
      }
    })
    .catch((err) => {
      console.log('error in cookie:', err);
      return next(err);
    });
};

module.exports = cookieController;
