import {combineReducers} from 'redux';
import recipeByIdReducer from './recipeById';
import recipesReducer from './recipesReducer';
import userByIdReducer from './userById';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: usersReducer,
  userAcces: userByIdReducer,
  recipe: recipeByIdReducer,
});

export default rootReducer;
