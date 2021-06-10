import actionTypes from '../actions/actionTypes';

function usersReducer(users = [], action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return [...users, action.newUser];

    default:
      return users;
  }
}
export default usersReducer;
