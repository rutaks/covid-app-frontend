import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.hospital.GET_HOSPITAL_AGENTS_START:
      return {
        ...state,
        getAgents: { ...state.getAgents, success: false, message: null, loading: true, error: null }
      };
    case actionTypes.hospital.GET_HOSPITAL_AGENTS_END:
      return {
        ...state,
        getAgents: { ...state.getAgents, loading: false }
      };
    case actionTypes.hospital.GET_HOSPITAL_AGENTS_SUCCESS:
      return {
        ...state,
        getAgents: {
          ...state.getAgents,
          // payload,
          //TODO: REFACTOR FOR PAGINATION
          payload: { ...state.getAgents.payload, content: payload },
          success: true
        }
      };
    case actionTypes.hospital.GET_HOSPITAL_AGENTS_FAILURE:
      return {
        ...state,
        getAgents: { ...state.getAgents, error: payload }
      };
    default:
      return null;
  }
};
