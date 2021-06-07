import axios from 'axios';
import {getUserById, addUsers, updateUser} from './usersActionCreators';

jest.mock('axios');
jest.mock('./actionTypes');

describe('When invoked a getUserById func', () => {
  test('should return and async function', async () => {
    const user = {email: 'cristian@gmail.com'};
    axios.mockResolvedValue(user);
    const dispatch = jest.fn();
    await getUserById(user)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should dispatch LOAD_USER_ERROR', async () => {
    const loadRecipeResponse = getUserById();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await loadRecipeResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_USER_ERROR',
    });
  });
});

describe('When invoked a addUsers func', () => {
  test('should call a async func', async () => {
    const data = {data: 'Pepe'};
    axios.post.mockResolvedValueOnce(data);
    const dispatch = jest.fn();
    await addUsers(data)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should dispatch ADD_USER_ERROR', async () => {
    const addUserResponse = addUsers();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await addUserResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_USER_ERROR',
    });
  });
});

describe('When invoked updateUser func', () => {
  test('should call a async func', async () => {
    const user = {
      email: 'jomateix@gmail.com',
    };
    axios.post.mockResolvedValueOnce(user);
    const dispatch = jest.fn();
    await updateUser(user)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
