import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default (payload = {}) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: `/v1/api/organisation-agents`,
      data: { ...payload },
      onStart: actionTypes.organisation.CREATE_ORGANISATION_AGENT_START,
      onEnd: actionTypes.organisation.CREATE_ORGANISATION_AGENT_END,
      onSuccess: actionTypes.organisation.CREATE_ORGANISATION_AGENT_SUCCESS,
      onFailure: actionTypes.organisation.CREATE_ORGANISATION_AGENT_FAILURE
    })
  );
