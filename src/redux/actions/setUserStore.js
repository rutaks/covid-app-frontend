import { actionTypes } from '../actionTypes';
/**
 * A function used to set user state object
 * @since version 1
 */
export default (payload) => (dispatch) =>
  dispatch({
    type: actionTypes.user.SET_USER_STORE,
    payload
  });
