import actionTypes from '../actions/actionTypes';

function recipesReducer(recipes = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_RECIPES:
      return action.recipes;

    case actionTypes.DELETE_RECIPES:
      return recipes.filter(recipe => recipe.id !== action.recipeId.id);

    case actionTypes.ADD_RECIPES:
      return [...recipes, action.recipe];

    case actionTypes.UPDATE_RECIPES:
      return recipes.map(recipe =>
        recipe.id === action.recipe.id ? {...recipe, ...action.recipe} : recipe,
      );

    default:
      return recipes;
  }
}
export default recipesReducer;