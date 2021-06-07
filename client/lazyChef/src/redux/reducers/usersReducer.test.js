import usersReducer from './usersReducer';

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

const addAction = {
  type: 'ADD_USER',
  newUser: {...usersList[1]},
};

const updateAction = {
  type: 'UPDATE_USER',
  user: {...usersList[0], password: '4321'},
};

const loadActionDefault = {
  type: 'LOAD_USER_ERROR',
  recipe: usersList[0],
};

describe('and invoked with a ADD_USER action', () => {
  test('should return an updated users list including the given user', () => {
    const result = usersReducer([{...usersList[0]}], addAction);
    expect(result).toEqual(usersList);
  });
});

describe('and invoked with a UPDATE_USER action', () => {
  test('should return an updated recipes list without the corresponding id task', () => {
    const result = usersReducer([{...usersList[0]}], updateAction);
    expect(result).toEqual([
      {
        _id: 1,
        email: 'cristian@lazychef.com',
        password: '4321',
      },
    ]);
  });
});

describe('and resolved with default', () => {
  test('then should return updatedRecipes', () => {
    const result = usersReducer(undefined, loadActionDefault);
    expect(result).toEqual([]);
  });
});
