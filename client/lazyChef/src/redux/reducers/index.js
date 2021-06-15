import {combineReducers} from 'redux';
import recipeByIdReducer from './recipeByIdReducer';
import recipesReducer from './recipesReducer';
import userByIdReducer from './userByIdReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: usersReducer,
  userAcces: userByIdReducer,
  recipe: recipeByIdReducer,
});

export default rootReducer;
