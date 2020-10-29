import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default (payload = {}) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: `/v1/api/hospital-agents`,
      data: { ...payload },
      onStart: actionTypes.hospital.CREATE_HOSPITAL_AGENT_START,
      onEnd: actionTypes.hospital.CREATE_HOSPITAL_AGENT_END,
      onSuccess: actionTypes.hospital.CREATE_HOSPITAL_AGENT_SUCCESS,
      onFailure: actionTypes.hospital.CREATE_HOSPITAL_AGENT_FAILURE
    })
  );
