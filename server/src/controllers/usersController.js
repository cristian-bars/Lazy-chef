/* eslint-disable no-underscore-dangle */
const debug = require('debug')('app:recipesController');
const User = require('../models/usersModel');

function usersController() {
  async function getAll(req, res) {
    const users = await User.find();
    res.json(users);
  }

  async function addUser(req, res) {
    const newUser = new User(req.body);
    debug(newUser);
    try {
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }
  return {
    getAll,
    addUser
  };
}

module.exports = usersController;
