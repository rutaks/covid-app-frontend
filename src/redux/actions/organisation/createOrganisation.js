import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default (payload = {}) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: `/v1/api/organisations`,
      data: { ...payload },
      onStart: actionTypes.organisation.CREATE_ORGANISATION_START,
      onEnd: actionTypes.organisation.CREATE_ORGANISATION_END,
      onSuccess: actionTypes.organisation.CREATE_ORGANISATION_SUCCESS,
      onFailure: actionTypes.organisation.CREATE_ORGANISATION_FAILURE
    })
  );
