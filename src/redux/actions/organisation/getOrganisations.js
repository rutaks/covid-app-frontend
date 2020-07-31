import { actionTypes } from '../../actionTypes';
import apiAction from '../../../helpers/apiAction';

export default ({ page = 0, size = 10, sortBy = 'id', sortDirection = 'DESC' }) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/v1/api/organisations?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      onStart:
        page === -1
          ? actionTypes.organisation.GET_ALL_ORGANISATIONS_START
          : actionTypes.organisation.GET_ORGANISATIONS_START,
      onEnd:
        page === -1
          ? actionTypes.organisation.GET_ALL_ORGANISATIONS_END
          : actionTypes.organisation.GET_ORGANISATIONS_END,
      onSuccess:
        page === -1
          ? actionTypes.organisation.GET_ALL_ORGANISATIONS_SUCCESS
          : actionTypes.organisation.GET_ORGANISATIONS_SUCCESS,
      onFailure:
        page === -1
          ? actionTypes.organisation.GET_ALL_ORGANISATIONS_END
          : actionTypes.organisation.GET_ORGANISATIONS_END
    })
  );
