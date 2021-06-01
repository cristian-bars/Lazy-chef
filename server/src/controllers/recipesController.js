/* eslint-disable no-underscore-dangle */
const debug = require('debug')('app:recipesController');
const Recipe = require('../models/recipesModel');

function recipesController() {
  async function getAll(req, res) {
    const recipes = await Recipe.find();
    res.json(recipes);
  }

  async function addRecipe(req, res) {
    const newRecipe = new Recipe(req.body);
    debug(newRecipe);
    try {
      await newRecipe.save();
      res.json(newRecipe);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function delRecipe(req, res) {
    try {
      await Recipe.findByIdAndDelete(req.params.recipes);
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
      const recipeById = await Recipe.findById(
        req.params.recipes
      );
      res.json(recipeById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  return {
    getAll,
    addRecipe,
    delRecipe,
    getById
  };
}

module.exports = recipesController;
