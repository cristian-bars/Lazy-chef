const {
  getAll,
  addRecipe
} = require('./recipesController')();
const Recipe = require('../models/recipesModel');

jest.mock('../models/recipesModel');

describe('getAll', () => {
  test('shoud get all tasks', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    Recipe.find.mockResolvedValueOnce([{ title: 'Good task' }]);

    // act
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ title: 'Good task' }]);
  });
});

describe('addRecipe', () => {
  class MockRecipe {
    constructor(title) {
      this.title = title;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }

  test('should call json', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const newRecipe = new MockRecipe('recipe title');

    Recipe.mockReturnValueOnce(newRecipe);

    // act
    await addRecipe(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ title: 'recipe title' });
  });

  test('should call send', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    Recipe.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });

    // act
    await addRecipe(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
