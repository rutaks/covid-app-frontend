import checkUser from '../../../helpers/checkUser';
import { decodeToken } from '../../../helpers/localStorageHelper';

export const userInitialState = {
  isAuth: checkUser(),
  user: decodeToken(),
  token: localStorage.MOU_COVID_USER || '',
  login: {
    success: false,
    loading: false,
    message: null,
    error: null
  },
  forgotPassword: {
    success: false,
    loading: false,
    message: null,
    error: null
  },
  resetPassword: {
    success: false,
    loading: false,
    message: null,
    error: null
  }
};
