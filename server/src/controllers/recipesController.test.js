const {
  getAll,
  addRecipe,
  delRecipe,
  getById
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

describe('delRecipe', () => {
  test('should call json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        recipeId: null
      }
    };

    await delRecipe(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should call status with 204', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        recipeId: null
      }
    };

    await delRecipe(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });
  test('should fail and call res.send with error', async () => {
    const req = {
      params: {
        recipeId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Recipe.findByIdAndDelete.mockRejectedValueOnce('error');

    await delRecipe(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getById', () => {
  test('should call res.status with 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        recipeId: null
      }
    };

    Recipe.findById.mockRejectedValueOnce();

    await getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  test('should call res.send with error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        recipeId: null
      }
    };

    Recipe.findById.mockRejectedValueOnce('error');

    await getById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });

  test('should call res.json ', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        recipeId: null
      }
    };

    Recipe.findById.mockResolvedValueOnce('un heroe');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('un heroe');
  });
});
