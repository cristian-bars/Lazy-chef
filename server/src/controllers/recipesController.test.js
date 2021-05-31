const {
  getAll
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
