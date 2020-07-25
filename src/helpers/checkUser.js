/**
 * A function used check if user is logged in through checking if token exists
 * @since version 1.0
 */
export default () => {
  try {
    const isAuth = !!localStorage.MOU_COVID_TOKEN;
    return isAuth;
  } catch (error) {
    return false;
  }
};
