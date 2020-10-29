import { decodeToken } from '../../../helpers/localStorageHelper';
import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.user.SET_USER_STORE:
      return { ...state, user: payload };
    default:
      return null;
  }
};
