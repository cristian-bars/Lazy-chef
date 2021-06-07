import axios from 'axios';
import {getRecipeById} from './recipesActionCreators';

jest.mock('axios');
jest.mock('./actionTypes');

describe('When invoked a getRecipeById func', () => {
  test('should return and async function', async () => {
    axios.mockResolvedValueOnce({title: 'Macarrones'});
    const dispatch = jest.fn();
    await getRecipeById()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should dispatch LOAD_TASKS_ERROR', async () => {
    const loadRecipeResponse = getRecipeById();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await loadRecipeResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_RECIPE_ERROR',
    });
  });
});
