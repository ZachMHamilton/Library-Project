const express = require('express');

const userController = require('../controllers/UserController');

const router = express.Router;


// POST - user submits login form and gets verified
router.post('/login', userController.verifyUser, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
