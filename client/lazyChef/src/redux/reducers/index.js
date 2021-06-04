import {combineReducers} from 'redux';
import recipesReducer from './recipesReducer';
import userByIdReducer from './userById';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: usersReducer,
  userAcces: userByIdReducer,
});

export default rootReducer;
