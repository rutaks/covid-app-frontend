import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/v1/api/vaccinees`,
      onStart: actionTypes.vaccinee.GET_VACCINEES_START,
      onEnd: actionTypes.vaccinee.GET_VACCINEES_END,
      onSuccess: actionTypes.vaccinee.GET_VACCINEES_SUCCESS,
      onFailure: actionTypes.vaccinee.GET_VACCINEES_END
    })
  );
