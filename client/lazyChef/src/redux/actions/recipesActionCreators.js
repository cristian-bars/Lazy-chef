import actionTypes from './actionTypes';
import axios from 'axios';
import {env} from '../../../.env.js';

const url = env.REACT_APP_PORT;

export function loadRecipes() {
  return async dispatch => {
    try {
      const {data} = await axios(`${url}/recipes`);
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
  return async dispatch => {
    try {
      const {data} = await axios.post(`${url}/recipes`, recipe);
      dispatch({
        type: actionTypes.ADD_RECIPE,
        recipe: data,
      });
    } catch (error) {
      dispatch({
        type: 'ADD_RECIPE_ERROR',
      });
    }
  };
}

export function deleteRecipe(recipeId) {
  return async dispatch => {
    try {
      await axios.delete(`${url}/recipes/${recipeId}`);
      dispatch({
        type: actionTypes.DELETE_RECIPE,
        recipeId,
      });
    } catch (error) {
      dispatch({
        type: 'DELETE_RECIPE_ERROR',
      });
    }
  };
}

export function updateRecipe(recipe) {
  return async dispatch => {
    try {
      const {data} = await axios.post(`${url}/recipes/${recipe._id}`, recipe);
      dispatch({
        type: actionTypes.UPDATE_RECIPE,
        recipe: data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_RECIPE_ERROR',
      });
    }
  };
}

export function getRecipeById(recipeId) {
  return async dispatch => {
    try {
      const {data} = await axios(`${url}/recipes/${recipeId}`);
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
