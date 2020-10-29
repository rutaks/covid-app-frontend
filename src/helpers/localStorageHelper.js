import jwtDecode from 'jwt-decode';

export const decodeToken = () => {
  try {
    const user = jwtDecode(localStorage.MOU_COVID_TOKEN);
    return user;
  } catch (error) {
    return {};
  }
};
