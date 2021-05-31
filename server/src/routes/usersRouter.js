const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(usersController.getAll)
    .post(usersController.addUser);

  routes
    .route('/:user');

  return routes;
}

module.exports = usersRouter();
