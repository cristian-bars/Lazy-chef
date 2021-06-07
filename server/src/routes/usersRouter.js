const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(usersController.getAll)
    .post(usersController.addUser);

  routes
    .route('/:users')
    .get(usersController.getById)
    .post(usersController.delUser)
    .put(usersController.updateUser);

  return routes;
}

module.exports = usersRouter();
