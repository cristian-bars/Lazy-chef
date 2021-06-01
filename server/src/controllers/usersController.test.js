const {
  getAll,
  addUser,
  delUser
} = require('./usersController')();
const User = require('../models/usersModel');

jest.mock('../models/usersModel');

describe('getAll', () => {
  test('shoud get all users', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    User.find.mockResolvedValueOnce([{ name: 'Cristian' }]);

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

    User.mockReturnValueOnce(newUser);

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

    User.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });

    // act
    await addUser(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('delUser', () => {
  test('should call json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        userId: null
      }
    };

    await delUser(req, res);

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
        userId: null
      }
    };

    await delUser(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });
  test('should fail and call res.send with error', async () => {
    const req = {
      params: {
        userId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    User.findByIdAndDelete.mockRejectedValueOnce('error');

    await delUser(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
