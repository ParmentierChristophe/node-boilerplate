import passport from 'passport';
import { LocalLogin } from './strategies/localStrategy';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use('local', LocalLogin);

exports.isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).json(res);
};
