const express = require('express');

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

// POST - user submits login form and gets verified
router.post('/login', userController.verifyUser, (req, res) => {
  return res.sendStatus(200);
});

router.post('/signup', userController.createUser, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
