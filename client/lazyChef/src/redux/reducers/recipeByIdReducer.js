import actionTypes from '../actions/actionTypes';

function recipeByIdReducer(recipe = {}, action) {
  if (action.type === actionTypes.LOAD_RECIPE) {
    return action.recipe;
  } else {
    return recipe;
  }
}
export default recipeByIdReducer;
