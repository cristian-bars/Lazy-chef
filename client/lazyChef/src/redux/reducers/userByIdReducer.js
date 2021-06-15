import actionTypes from '../actions/actionTypes';

function userByIdReducer(userToken = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return action.userToken;

    case actionTypes.UPDATE_USER:
      return {
        ...userToken,
        user: {
          ...userToken.user,
          ...action.user,
        },
      };

    default:
      return userToken;
  }
}
export default userByIdReducer;
