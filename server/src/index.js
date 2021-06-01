const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const passport = require('passport');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();
require('./passport/passport.config');
require('./ddbb/mongoose.config');

const port = process.env.PORT;
const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.set('view engine', 'ejs');
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const recipesRouter = require('./routes/recipesRouter');
const usersRouter = require('./routes/usersRouter');

server.use('/recipes', recipesRouter);
server.use('/users', usersRouter);
server.use('/', authRoutes);
server.use(
  '/users',
  passport.authenticate('jwt', { session: false }),
  authRoutes
);

server.listen(port,
  () => debug(`Server is running in ${chalk.yellow(`localhost:${port}`)}`));
