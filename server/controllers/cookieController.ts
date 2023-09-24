const models = require('../models/userModel');
import { NextFunction, Request, Response } from "express";

const cookieController = {
  // works
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => {
    // get username
    const username: string = req.body.username
    models.User.findOne({ username: username })
      .then((obj: {_id:string, username: string, password: string}) => {
        // if user exists
        if (obj) {
          // create cookie with their id
          res.cookie('USERssid', obj._id, { httpOnly: true });
          res.locals.id = obj._id;
          return next();
        }
      })
      .catch((err: Error) => {
        console.log('error in cookie:', err);
        return next(err);
      });
  },
};


module.exports = cookieController;