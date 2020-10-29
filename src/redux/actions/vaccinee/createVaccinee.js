import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default (payload = {}) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: `/v1/api/vaccinees`,
      data: { ...payload },
      onStart: actionTypes.vaccinee.CREATE_VACCINEE_START,
      onEnd: actionTypes.vaccinee.CREATE_VACCINEE_END,
      onSuccess: actionTypes.vaccinee.CREATE_VACCINEE_SUCCESS,
      onFailure: actionTypes.vaccinee.CREATE_VACCINEE_FAILURE
    })
  );
