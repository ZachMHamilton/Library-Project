const express = require('express');
import { Request, Response } from "express";

const userController = require('../controllers/userController.ts');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

// POST - user submits login form and gets verified
router.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req: Request, res: Response) => {
    return res.sendStatus(200);
  }
);

router.post('/signup', userController.createUser, (req: Request, res: Response) => {
  return res.sendStatus(200);
});

module.exports = router;
