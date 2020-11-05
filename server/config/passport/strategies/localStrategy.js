import { loginUser } from '../utils/user';

import { Strategy as LocalStrategy } from 'passport-local';

/**
 * Sign in using Email and Password.
 */
export const LocalLogin = new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const user = await loginUser({ email, password });
      done(null, user);
    } catch (err) {
      let message = err.message || 'An error occurred. Please try again later.';
      return done(null, false, { message });
    }
  }
);
