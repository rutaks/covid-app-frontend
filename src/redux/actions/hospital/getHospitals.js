import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default ({ page = 0, size = 10, sortBy = 'id', sortDirection = 'DESC' }) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/v1/api/hospitals?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      onStart:
        page === -1 ? actionTypes.hospital.GET_ALL_HOSPITALS_START : actionTypes.hospital.GET_HOSPITALS_START,
      onEnd:
        page === -1 ? actionTypes.hospital.GET_ALL_HOSPITALS_END : actionTypes.hospital.GET_HOSPITALS_END,
      onSuccess:
        page === -1
          ? actionTypes.hospital.GET_ALL_HOSPITALS_SUCCESS
          : actionTypes.hospital.GET_HOSPITALS_SUCCESS,
      onFailure:
        page === -1 ? actionTypes.hospital.GET_ALL_HOSPITALS_END : actionTypes.hospital.GET_HOSPITALS_END
    })
  );
