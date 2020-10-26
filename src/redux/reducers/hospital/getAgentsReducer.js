import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.agent.GET_AGENTS_START:
      return {
        ...state,
        getAgents: { success: false, message: null, loading: true, error: null }
      };
    case actionTypes.agent.GET_AGENTS_END:
      return {
        ...state,
        getAgents: { ...state.getAgents, loading: false }
      };
    case actionTypes.agent.GET_AGENTS_SUCCESS:
      return {
        ...state,
        agentPayload: payload,
        getAgents: { ...state.getAgents, success: true }
      };
    case actionTypes.agent.GET_AGENTS_FAILURE:
      return {
        ...state,
        getAgents: { ...state.getAgents, error: payload }
      };
    default:
      return null;
  }
};
