import userByIdReducer from './userById';

const usersList = [
  {
    _id: 1,
    email: 'cristian@lazychef.com',
    password: '1234',
  },
  {
    _id: 2,
    email: 'cristian2@lazychef.com',
    password: '12',
  },
];

const updateAction = {
  type: 'UPDATE_USER',
  user: {...usersList[0], password: '4321'},
};

const loadAction = {
  type: 'LOAD_USER',
  userToken: usersList[0],
};

const loadActionDefault = {
  type: 'LOAD_USER_ERROR',
  userToken: usersList[0],
};

describe('and invoked with a UPDATE_USER action', () => {
  test('should return an updated user with other password', () => {
    const result = userByIdReducer([{...usersList[0]}], updateAction);
    expect(result).toEqual({
      0: {
        _id: 1,
        email: 'cristian@lazychef.com',
        password: '1234',
      },
      user: {_id: 1, email: 'cristian@lazychef.com', password: '4321'},
    });
  });
});

describe('and resolved with default', () => {
  test('then should return updatedRecipes', () => {
    const result = userByIdReducer(undefined, loadActionDefault);
    expect(result).toEqual({});
  });
});

describe('Given getUserById function ', () => {
  test('when resolved with getUserById, then should return user', () => {
    const result = userByIdReducer(null, loadAction);
    expect(result).toEqual(usersList[0]);
  });

  test('when resolved with default, then should return user', () => {
    expect(userByIdReducer(undefined, loadActionDefault)).toEqual({});
  });
});
