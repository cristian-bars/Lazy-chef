import actionTypes from '../actions/actionTypes';

function usersReducer(users = [], action) {
  if (action.type === actionTypes.ADD_USER) {
    return [...users, action.newUser];
  } else {
    return users;
  }
}
export default usersReducer;
