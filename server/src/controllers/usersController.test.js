const {
  getAll,
  addUser,
  delUser,
  getById,
  updateUser
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

describe('getById', () => {
  test('should call res.status with 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        userId: null
      }
    };

    User.findById.mockRejectedValueOnce();

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
        userId: null
      }
    };

    User.findById.mockRejectedValueOnce('error');

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
        userId: null
      }
    };

    User.findById.mockResolvedValueOnce('un heroe');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('un heroe');
  });
});

describe('When invoked a updateUser', () => {
  test('Should call a func json with', async () => {
    const req = {
      params: { users: 2 },
      body: { user: 'Cristian' }
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    User.findByIdAndUpdate.mockResolvedValueOnce('Testing');
    await updateUser(req, res);
    expect(res.json).toHaveBeenCalledWith('Testing');
  });

  test('Should call a func send with error', async () => {
    const req = {
      params: { users: 5 },
      body: { user: 'peppacoe' }
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    User.findByIdAndUpdate.mockRejectedValueOnce('Cristian');
    await updateUser(req, res);
    expect(res.send).toHaveBeenCalledWith('Cristian');
  });
});
