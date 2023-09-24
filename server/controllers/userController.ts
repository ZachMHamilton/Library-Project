import { NextFunction, Request, Response } from "express";

const models = require('../models/userModel');
const userController = {
  verifyUser: (req: Request, res: Response, next: NextFunction) => {
    // pull data from body
    const username: string = req.body.username;
    const password: string = req.body.password;
    // find matching user
    models.User.findOne({ username: username })
      .then((obj: {username: string, password: string}) => {
        // if it doesnt match
        if (!obj || password !== obj.password) {
          // something
          console.log('password does not match');
          return next({Error: 'password does not match'});
        } else {
          return next();
        }
      })
      .catch((err: Error) => {
        console.log('err in verify', err);
        return next(err);
      });
  },
  
  createUser: (req: Request, res: Response, next: NextFunction) => {
    // get username/password
    const { username, password } = req.body;
    models.User.create(req.body)
      .then((data: Object) => {
        if (!username || !password) {
          return next({Error: 'Error creating user'});
        }
        return next();
      })
      .catch((err: Error) => {
        console.log('error creating user');
        return next(err);
      });
  },

};


module.exports = userController;