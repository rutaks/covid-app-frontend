import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.agent.GET_AGENTS_START:
      return {
        ...state,
        getAdmins: { success: false, message: null, loading: true, error: null }
      };
    case actionTypes.agent.GET_AGENTS_END:
      return {
        ...state,
        getAdmins: { ...state.getAdmins, loading: false }
      };
    case actionTypes.agent.GET_AGENTS_SUCCESS:
      return {
        ...state,
        agentPayload: payload,
        getAdmins: { ...state.getAdmins, success: true }
      };
    case actionTypes.agent.GET_AGENTS_FAILURE:
      return {
        ...state,
        getAdmins: { ...state.getAdmins, error: payload }
      };
    default:
      return null;
  }
};
