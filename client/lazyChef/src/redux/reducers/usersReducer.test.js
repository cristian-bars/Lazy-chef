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

const loadActionDefault = {
  type: 'ADD_USER_ERROR',
  newUser: usersList[0],
};

describe('and invoked with a ADD_USER action', () => {
  test('should return an updated users list including the given user', () => {
    const result = usersReducer([{...usersList[0]}], addAction);
    expect(result).toEqual(usersList);
  });
});

describe('and resolved with default', () => {
  test('then should return updatedRecipes', () => {
    const result = usersReducer(undefined, loadActionDefault);
    expect(result).toEqual([]);
  });
});
