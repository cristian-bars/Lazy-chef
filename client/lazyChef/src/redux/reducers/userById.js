import actionTypes from '../actions/actionTypes';

function userByIdReducer(userToken = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return action.userToken;

    default:
      return userToken;
  }
}
export default userByIdReducer;
