const models = require('../models/userModel');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const { username } = req.body;
  models.User.findOne({ username: username })
    .then((obj) => {
      if (obj) {
        res.cookie('ssid', obj._id, { httpOnly: true });
        res.locals.id = obj._id;
        return next();
      }
    })
    .catch((err) => {
      console.log('error in cookie:', err);
      return next(err);
    });
};

module.exports = cookieController;
