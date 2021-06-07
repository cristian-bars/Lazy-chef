import actionTypes from './actionTypes';
import axios from 'axios';

//const url = 'http://localhost/users';
const url = 'http://192.168.0.29:2022';
//const url = 'http://192.168.1.130:2022';
//const url = process.env.REACT_APP_PORT;

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
  console.log(user);
  return async dispatch => {
    await axios.post(`${url}/${user._id}`);
    dispatch({
      type: actionTypes.UPDATE_USER,
      user,
    });
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
