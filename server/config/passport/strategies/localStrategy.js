import models from '../../../../database/models';

import { Strategy as LocalStrategy } from 'passport-local';

/**
 * Sign in using Email and Password.
 */
export const localLogin = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
      try {
        if (!args.email || !args.password) throw new Error('Wrong credentials');
        let user = await models.User.findOne({ where: { email: email } });
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        done(error, false);
      }
    })
  );
};
