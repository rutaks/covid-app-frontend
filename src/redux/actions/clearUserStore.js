import { actionTypes } from '../../actionTypes';
/**
 * A function used to clear user state
 * @since version 1
 */
export default (payload) => (dispatch) =>
  dispatch({
    type: actionTypes.user.CLEAR_USER_STORE,
    payload
  });
