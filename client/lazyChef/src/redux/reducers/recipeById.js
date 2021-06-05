import actionTypes from '../actions/actionTypes';

function recipeByIdReducer(recipe = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_RECIPE:
      return action.recipe;

    default:
      return recipe;
  }
}
export default recipeByIdReducer;
