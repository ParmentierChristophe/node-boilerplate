import passport from 'passport';
import models from '../../../database/models';


export const register = async (req,res,next)=> {
    try {
        const user = await models.User.create(req.body);
    
        return res.status(201).json({
          user
        });
      } catch (error) {
        return res.status(500).json({ error: 'error' });
      }
}

export const login = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      const message = info && info.message ? info.message : 'An error occurred. Please try again later.';
      if (err) {
        return res.status(500).json({ message });
      }
      if (!user) {
        return res.status(401).json({ message });
      }
      return req.login(user, function loginCallback(innerErr) {
        if (innerErr) {
          return res.status(401).json({ message });
        }
        return res.status(200).json({ user });
      });
    })(req, res, next);
  };

  export const logout = async (req,res,next)=> {
    req.logout();
    return res.status(200).json({status: 'success'});
}