import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default ({ page = 0, size = 10, sortBy = 'id', sortDirection = 'DESC' }) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/v1/api/hospitals/1/admins?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      onStart: page === -1 ? actionTypes.admin.GET_ALL_ADMINS_START : actionTypes.admin.GET_ADMINS_START,
      onEnd: page === -1 ? actionTypes.admin.GET_ALL_ADMINS_END : actionTypes.admin.GET_ADMINS_END,
      onSuccess:
        page === -1 ? actionTypes.admin.GET_ALL_ADMINS_SUCCESS : actionTypes.admin.GET_ADMINS_SUCCESS,
      onFailure: page === -1 ? actionTypes.admin.GET_ALL_ADMINS_END : actionTypes.admin.GET_ADMINS_END
    })
  );
