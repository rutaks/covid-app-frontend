import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.user.LOGIN_USER_START:
      // localStorage.MOU_COVID_USER = '';
      localStorage.MOU_COVID_TOKEN = '';
      return {
        ...state,
        login: {
          ...state.login,
          success: false,
          message: null,
          loading: true,
          error: null
        }
      };
    case actionTypes.user.LOGIN_USER_END:
      return {
        ...state,
        login: { ...state.login, loading: false }
      };
    case actionTypes.user.LOGIN_USER_SUCCESS:
      // localStorage.MOU_COVID_USER = JSON.stringify(payload.payload.user);
      localStorage.MOU_COVID_TOKEN = payload.token;

      return {
        ...state,
        isAuth: true,
        // profile: payload.payload.user,
        // user: localStorage.MOU_COVID_USER,
        login: {
          loading: false,
          success: true,
          message: payload.message,
          error: null
        }
      };
    case actionTypes.user.LOGIN_USER_FAILURE:
      return {
        ...state,
        login: {
          loading: false,
          success: false,
          message: null,
          error: payload
        }
      };
    default:
      return null;
  }
};
