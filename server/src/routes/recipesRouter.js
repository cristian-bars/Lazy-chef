const { Router } = require('express');
const recipesController = require('../controllers/recipesController')();

function recipesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(recipesController.getAll)
    .post(recipesController.addRecipe);

  routes
    .route('/:recipes')
    .delete(recipesController.delRecipe)
    .get(recipesController.getById)
    .put(recipesController.updateRecipe);

  return routes;
}

module.exports = recipesRouter();
