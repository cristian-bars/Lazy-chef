import axios from 'axios';
import {
  loadRecipes,
  getRecipeById,
  addRecipe,
  deleteRecipe,
} from './recipesActionCreators';

jest.mock('axios');
jest.mock('./actionTypes');

describe('When invoked a loadRecipes func', () => {
  test('should return and async function', async () => {
    axios.mockResolvedValueOnce({title: 'Macarrones'});
    const dispatch = jest.fn();
    await loadRecipes()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should dispatch LOAD_RECIPES_ERROR', async () => {
    const loadRecipeResponse = loadRecipes();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await loadRecipeResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_RECIPES_ERROR',
    });
  });
});

describe('When invoked a getRecipeById func', () => {
  test('should return and async function', async () => {
    axios.mockResolvedValueOnce({title: 'Macarrones'});
    const dispatch = jest.fn();
    await getRecipeById()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should dispatch LOAD_RECIPE_ERROR', async () => {
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

describe('When invoked a addRecipe func', () => {
  test('should call a async func', async () => {
    const data = {recipe: 'Tallarines'};
    axios.post.mockResolvedValueOnce(data);
    const dispatch = jest.fn();
    await addRecipe(data)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should dispatch ADD_RECIPE_ERROR', async () => {
    const addRecipeResponse = addRecipe();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await addRecipeResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_RECIPE_ERROR',
    });
  });
});

describe('When invoked a deleteRecipe', () => {
  test('should call a asunc func', async () => {
    const recipe = {
      title: 'Huevo duro',
      author: 'Cristian',
    };
    axios.delete.mockResolvedValueOnce({data: 'Cristian'});
    const dispatch = jest.fn();
    await deleteRecipe(recipe)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should dispatch DELETE_RECIPE_ERROR', async () => {
    const deleteRecipeResponse = deleteRecipe();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await deleteRecipeResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'DELETE_RECIPE_ERROR',
    });
  });
});
