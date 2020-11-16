import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.organisation.CREATE_ORGANISATION_AGENT_START:
      return {
        ...state,
        createOrganisationAgent: { success: false, message: null, loading: true, error: null }
      };
    case actionTypes.organisation.CREATE_ORGANISATION_AGENT_END:
      return {
        ...state,
        createOrganisationAgent: {
          ...state.createOrganisationAgent,
          loading: false,
          success: false,
          error: null
        }
      };
    case actionTypes.organisation.CREATE_ORGANISATION_AGENT_SUCCESS:
      return {
        ...state,
        agentPayload: {
          ...state.agentPayload,
          content: [...state.agentPayload.content, payload]
        },
        createOrganisationAgent: { ...state.createOrganisationAgent, success: true }
      };
    case actionTypes.organisation.CREATE_ORGANISATION_AGENT_FAILURE:
      return {
        ...state,
        createOrganisationAgent: { ...state.createOrganisationAgent, error: payload }
      };
    default:
      return null;
  }
};
