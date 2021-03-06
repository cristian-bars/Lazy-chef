import actionTypes from './actionTypes';
import axios from 'axios';
import {env} from '../../../.env.js';

const url = env.REACT_APP_PORT;

export function addUsers(user) {
  return async dispatch => {
    try {
      const {data} = await axios.post(`${url}/signup`, user);
      dispatch({
        type: actionTypes.ADD_USER,
        newUser: data,
      });
    } catch (error) {
      dispatch({
        type: 'ADD_USER_ERROR',
      });
    }
  };
}

export function updateUser(user) {
  const tokenBearer = {headers: {Authorization: `Bearer ${user.bearerToken}`}};
  return async dispatch => {
    try {
      const {data} = await axios.put(
        `${url}/users/${user.id}`,
        user,
        tokenBearer,
      );
      dispatch({
        type: actionTypes.UPDATE_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_USER_ERROR',
      });
    }
  };
}

export function getUserById(user) {
  return async dispatch => {
    try {
      const {data} = await axios.post(`${url}/login`, user);
      dispatch({
        type: actionTypes.LOAD_USER,
        userToken: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_USER_ERROR',
      });
    }
  };
}
