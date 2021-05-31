const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT;
const server = express();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const recipesRouter = require('./routes/recipesRouter');

server.use('/', recipesRouter);

server.listen('2022',
  () => debug(`Server is running in ${chalk.yellow('localhost:2022')}`));
