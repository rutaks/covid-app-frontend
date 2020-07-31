import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default (payload = {}) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: `/v1/api/hospitals`,
      data: { ...payload },
      onStart: actionTypes.hospital.CREATE_HOSPITAL_START,
      onEnd: actionTypes.hospital.CREATE_HOSPITAL_END,
      onSuccess: actionTypes.hospital.CREATE_HOSPITAL_SUCCESS,
      onFailure: actionTypes.hospital.CREATE_HOSPITAL_FAILURE
    })
  );
