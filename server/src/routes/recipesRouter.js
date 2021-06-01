const { Router } = require('express');
const recipesController = require('../controllers/recipesController')();

function recipesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(recipesController.getAll)
    .post(recipesController.addRecipe);

  routes
    .route('/:recipe');

  return routes;
}

module.exports = recipesRouter();
