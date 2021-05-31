const {
  getAll,
  addUser
} = require('./usersController')();
const Recipe = require('../models/usersModel');

jest.mock('../models/usersModel');

describe('getAll', () => {
  test('shoud get all users', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    Recipe.find.mockResolvedValueOnce([{ name: 'Cristian' }]);

    // act
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Cristian' }]);
  });
});

describe('addUser', () => {
  class MockUser {
    constructor(name) {
      this.name = name;
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

    const newUser = new MockUser('user name');

    Recipe.mockReturnValueOnce(newUser);

    // act
    await addUser(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'user name' });
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
    await addUser(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
