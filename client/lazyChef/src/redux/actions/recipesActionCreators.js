import actionTypes from './actionTypes';
import axios from 'axios';

//const url = 'http://localhost/recipes';
const url = 'http://192.168.0.29:2022/recipes';
//const url = 'http://192.168.1.130:2022/recipes';

export function loadRecipes() {
  return async dispatch => {
    try {
      const {data} = await axios(url);
      dispatch({
        type: actionTypes.LOAD_RECIPES,
        recipes: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_RECIPES_ERROR',
      });
    }
  };
}

export function addRecipe(recipe) {
  return {
    type: actionTypes.ADD_RECIPE,
    recipe,
  };
}

export function deleteRecipe(recipeId) {
  return async dispatch => {
    await axios.delete(`${url}/${recipeId.id}`);
    dispatch({
      type: actionTypes.DELETE_RECIPE,
      recipeId,
    });
  };
}

export function updateRecipe(recipe) {
  return {
    type: actionTypes.UPDATE_RECIPE,
    recipe,
  };
}

export function loadRecipe(recipe) {
  return {
    type: actionTypes.LOAD_RECIPE,
    recipe,
  };
}

export function getRecipeById(recipeId) {
  console.log(`${url}/${recipeId}`);
  return async dispatch => {
    try {
      const {data} = await axios(`${url}/${recipeId}`);
      dispatch({
        type: actionTypes.LOAD_RECIPE,
        recipe: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_RECIPE_ERROR',
      });
    }
  };
}
