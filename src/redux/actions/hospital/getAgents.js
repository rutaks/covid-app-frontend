import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default ({ page = 0, size = 10, sortBy = 'id', sortDirection = 'DESC' }) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/v1/api/hospitals/1/admins?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      onStart: page === -1 ? actionTypes.agent.GET_ALL_AGENTS_START : actionTypes.agent.GET_AGENTS_START,
      onEnd: page === -1 ? actionTypes.agent.GET_ALL_AGENTS_END : actionTypes.agent.GET_AGENTS_END,
      onSuccess:
        page === -1 ? actionTypes.agent.GET_ALL_AGENTS_SUCCESS : actionTypes.agent.GET_AGENTS_SUCCESS,
      onFailure: page === -1 ? actionTypes.agent.GET_ALL_AGENTS_END : actionTypes.agent.GET_AGENTS_END
    })
  );
