import recipesReducer from './recipeByIdReducer';

const recipesList = [
  {
    _id: 1,
    title: 'Macarrones',
    author: 'Cristian Bars',
  },
  {
    _id: 2,
    title: 'Verdura',
    author: 'Josefina rios',
  },
];

const loadAction = {
  type: 'LOAD_RECIPE',
  recipe: recipesList[0],
};

const loadActionDefault = {
  type: 'LOAD_RECIPE_ERROR',
  recipe: recipesList[0],
};

describe('Given a recipesReducer', () => {
  describe('and invoked with a LOAD_RECIPE action', () => {
    test('should return an updated selectedRecipe', () => {
      const result = recipesReducer(null, loadAction);
      expect(result).toEqual(recipesList[0]);
    });
    test('when resolved with default, then should return updatedRecipes', () => {
      const result = recipesReducer(undefined, loadAction);
      expect(result).toEqual(recipesList[0]);
    });
  });
  test('when resolved with default, then should return updatedRecipes', () => {
    const result = recipesReducer(undefined, loadActionDefault);
    expect(result).toEqual({});
  });
});
