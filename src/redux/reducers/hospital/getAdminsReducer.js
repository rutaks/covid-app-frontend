import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.admin.GET_ADMINS_START:
      return {
        ...state,
        getAdmins: { success: false, message: null, loading: true, error: null }
      };
    case actionTypes.admin.GET_ADMINS_END:
      return {
        ...state,
        getAdmins: { ...state.getAdmins, loading: false }
      };
    case actionTypes.admin.GET_ADMINS_SUCCESS:
      return {
        ...state,
        // adminPayload: payload,
        //TODO: REFACTOR FOR PAGINATION
        adminPayload: { content: payload },
        getAdmins: { ...state.getAdmins, success: true }
      };
    case actionTypes.admin.GET_ADMINS_FAILURE:
      return {
        ...state,
        getAdmins: { ...state.getAdmins, error: payload }
      };
    default:
      return null;
  }
};
