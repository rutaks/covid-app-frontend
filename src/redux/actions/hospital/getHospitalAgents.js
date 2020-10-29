import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default ({ page = 0, size = 10, sortBy = 'id', sortDirection = 'DESC', hospitalId = '1' }) => (
  dispatch
) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/v1/api/hospitals/${hospitalId}/agents?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      onStart:
        page === -1
          ? actionTypes.hospital.GET_ALL_HOSPITAL_AGENTS_START
          : actionTypes.hospital.GET_HOSPITAL_AGENTS_START,
      onEnd:
        page === -1
          ? actionTypes.hospital.GET_ALL_HOSPITAL_AGENTS_END
          : actionTypes.hospital.GET_HOSPITAL_AGENTS_END,
      onSuccess:
        page === -1
          ? actionTypes.hospital.GET_ALL_HOSPITAL_AGENTS_START
          : actionTypes.hospital.GET_HOSPITAL_AGENTS_SUCCESS,
      onFailure:
        page === -1
          ? actionTypes.hospital.GET_ALL_HOSPITAL_AGENTS_END
          : actionTypes.hospital.GET_HOSPITAL_AGENTS_END
    })
  );
