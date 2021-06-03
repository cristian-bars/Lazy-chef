import actionTypes from './actionTypes';
import axios from 'axios';

//const url = 'http://localhost/users';
const url = 'http://192.168.0.29:2022';

export function loadUsers() {
  return async dispatch => {
    try {
      const {data} = await axios(url);
      dispatch({
        type: actionTypes.LOAD_USERS,
        users: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_USERS_ERROR',
      });
    }
  };
}

export function addUsers(user) {
  return {
    type: actionTypes.ADD_USER,
    user,
  };
}

export function deleteUser(userId) {
  return async dispatch => {
    await axios.delete(`${url}/${userId.id}`);
    dispatch({
      type: actionTypes.DELETE_USER,
      userId,
    });
  };
}

export function updateUser(user) {
  return {
    type: actionTypes.UPDATE_USER,
    user,
  };
}

export function loadUser(user) {
  return {
    type: actionTypes.LOAD_USER,
    user,
  };
}

export function getUserById(user) {
  return async dispatch => {
    try {
      const {data} = await axios.post(`${url}/login`, user);
      dispatch({
        type: actionTypes.LOAD_USER,
        user: data,
      });
    } catch (error) {
      console.log('fallo');
      dispatch({
        type: 'LOAD_USERS_ERROR',
      });
    }
  };
}
