import actionTypes from '../actions/actionTypes';

function recipesReducer(recipes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_RECIPES:
      return action.recipes;

    case actionTypes.DELETE_RECIPE:
      return recipes.filter(recipe => recipe._id !== action.recipeId);

    case actionTypes.ADD_RECIPE:
      return [...recipes, action.recipe];

    case actionTypes.UPDATE_RECIPE:
      return recipes.map(recipe =>
        recipe._id === action.recipe._id
          ? {...recipe, ...action.recipe}
          : recipe,
      );

    default:
      return recipes;
  }
}
export default recipesReducer;
