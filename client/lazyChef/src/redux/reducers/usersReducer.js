import actionTypes from '../actions/actionTypes';

function usersReducer(users = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return action.recipes;

    case actionTypes.DELETE_USER:
      return users.filter(user => user.id !== action.userId.id);

    case actionTypes.ADD_USER:
      return [...users, action.user];

    case actionTypes.UPDATE_USER:
      return users.map(user =>
        user.id === action.user.id ? {...user, ...action.user} : user,
      );

    case actionTypes.LOAD_USER:
      return action.user;

    default:
      return users;
  }
}
export default usersReducer;
