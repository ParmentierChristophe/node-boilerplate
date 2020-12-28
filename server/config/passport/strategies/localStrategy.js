import models from '../../../../database/models';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';

/**
 * Sign in using Email and Password.
 */
export const localLogin = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
      try {
        if (!email || !password) throw new Error('Wrong credentials');
        let user = await models.User.findOne({ where: { email: email } });

        if (user) {
          const result = await bcrypt.compare(password, user.password);
          if (!result) {
            return done(null, false, { message: 'password was wrong' });
          }
        }

        if (!user) {
          return done(null, false, { message: 'user not found' });
        }

        return done(null, user);
      } catch (error) {
        done(error, false);
      }
    })
  );
};
