import { actionTypes } from '../actionTypes';
import apiAction from '../../helpers/apiAction';

export default (payload = { username: '', password: '' }) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/v1/api/auth/login',
      data: payload,
      onStart: actionTypes.user.LOGIN_USER_START,
      onEnd: actionTypes.user.LOGIN_USER_END,
      onSuccess: actionTypes.user.LOGIN_USER_SUCCESS,
      onFailure: actionTypes.user.LOGIN_USER_FAILURE
    })
  );
