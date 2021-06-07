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

  async function delUser(req, res) {
    try {
      await User.findByIdAndDelete(req.params.users);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(404);
      debug(error);
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const userById = await User.findById(
        req.params.users
      );
      res.json(userById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.users,
        req.body
      );
      res.status(200);
      res.json(updatedUser);
    } catch (error) {
      res.status(404);
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    addUser,
    delUser,
    getById,
    updateUser
  };
}

module.exports = usersController;
