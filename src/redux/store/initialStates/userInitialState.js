import checkUser from "../../../helpers/checkUser";

export const userInitialState = {
  isAuth: checkUser(),
  user: localStorage.MOU_COVID_USER || "",
  token: localStorage.MOU_COVID_USER || "",
  login: {
    success: false,
    loading: false,
    message: null,
    error: null,
  },
  forgotPassword: {
    success: false,
    loading: false,
    message: null,
    error: null,
  },
  resetPassword: {
    success: false,
    loading: false,
    message: null,
    error: null,
  },
};
