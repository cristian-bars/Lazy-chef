import recipesReducer from './recipesReducer';

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
  type: 'LOAD_RECIPES',
  recipes: recipesList[0],
};

const deleteAction = {
  type: 'DELETE_RECIPE',
  recipeId: {_id: 1},
};

const addAction = {
  type: 'ADD_RECIPE',
  recipe: {...recipesList[1]},
};

const updateAction = {
  type: 'UPDATE_RECIPE',
  recipe: {...recipesList[0], author: 'Josep'},
};

const loadActionDefault = {
  type: 'LOAD_RECIPE_ERROR',
  recipe: recipesList[0],
};

describe('Given a recipesReducer', () => {
  describe('and invoked with a LOAD_RECIPES action', () => {
    test('should return an updated selectedRecipe', () => {
      const result = recipesReducer(null, loadAction);
      expect(result).toEqual(recipesList[0]);
    });
  });
});

describe('and invoked with a ADD_RECIPE action and a recipe', () => {
  test('should return an updated recipes list including the given recipe', () => {
    const result = recipesReducer([{...recipesList[0]}], addAction);
    expect(result).toEqual(recipesList);
  });
});

describe('and invoked with a DELETE_RECIPE action and an id', () => {
  test('should return an updated recipes list without the corresponding id recipe', () => {
    const result = recipesReducer([...recipesList], deleteAction);
    expect(result).toEqual([
      {
        _id: 2,
        title: 'Verdura',
        author: 'Josefina rios',
      },
    ]);
  });
});

describe('and invoked with a UPDATE_RECIPE action and an id', () => {
  test('should return an updated recipes list without the corresponding id task', () => {
    const result = recipesReducer([{...recipesList[0]}], updateAction);
    expect(result).toEqual([
      {
        _id: 1,
        title: 'Macarrones',
        author: 'Josep',
      },
    ]);
  });
});

describe('and resolved with default', () => {
  test('then should return updatedRecipes', () => {
    const result = recipesReducer(undefined, loadActionDefault);
    expect(result).toEqual([]);
  });
});
