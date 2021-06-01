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
  return {
    getAll,
    addRecipe
  };
}

module.exports = recipesController;
