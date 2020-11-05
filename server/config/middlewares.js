import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';

export default (app) => {
  app.disable('x-powered-by');
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: 'secret',
      cookie: { maxAge: 1209600000 }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
