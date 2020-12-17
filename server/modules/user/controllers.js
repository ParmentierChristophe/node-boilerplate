import passport from 'passport';
import models from '../../../database/models';

export const register = async (req, res, next) => {
  try {
    const user = await models.User.create(req.body);

    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: 'error' });
  }
};

export const login = async (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    const message = info && info.message ? info.message : 'An error occurred. Please try again later.';
    if (err) {
      return res.status(500).json({ message });
    }
    if (!user) {
      return res.status(401).json({ message });
    } else {
      user.token = user.generateJWT();
      return res.json({ token: user.token });
    }
  })(req, res, next);
};
