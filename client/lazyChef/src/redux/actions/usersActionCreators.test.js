import axios from 'axios';
import {getUserById} from './usersActionCreators';

jest.mock('axios');
jest.mock('./actionTypes');

describe('When invoked a getUserById func', () => {
  test('should return and async function', async () => {
    axios.mockResolvedValueOnce({email: 'pepe@user.com'});
    const dispatch = jest.fn();
    await getUserById()(dispatch);
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
