/* eslint-disable consistent-return */
const passport = require('passport');
const JWTstrategy = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/usersModel');

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (user !== null) {
          return done(null, false, { message: 'Email already taken' });
        }

        if (user === null) {
          const newUser = await User.create({
            email: email.toLowerCase(),
            password,
            name: req.body.name.toLowerCase()
          });

          return done(null, newUser);
        }
      } catch (error) {
        return done(error);
      }
    })
  )
);

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        if (!user.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong Password' });
        }
        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTstrategy.ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
