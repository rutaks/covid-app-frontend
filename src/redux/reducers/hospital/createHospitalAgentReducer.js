import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.hospital.CREATE_HOSPITAL_AGENT_START:
      return {
        ...state,
        createHospitalAgent: {
          ...state.createHospitalAgent,
          success: false,
          message: null,
          loading: true,
          error: null
        }
      };
    case actionTypes.hospital.CREATE_HOSPITAL_AGENT_END:
      return {
        ...state,
        createHospitalAgent: {
          ...state.createHospitalAgent,
          loading: false,
          success: false,
          error: null
        }
      };
    case actionTypes.hospital.CREATE_HOSPITAL_AGENT_SUCCESS:
      return {
        ...state,
        getAgents: {
          ...state.getAgents,
          payload: {
            ...state.getAgents.payload,
            //TODO: REFACTOR FOR PAGINATION
            content: [...state.getAgents.payload.content, payload]
          }
        },
        createHospitalAgent: { ...state.createHospitalAgent, success: true }
      };
    case actionTypes.hospital.CREATE_HOSPITAL_AGENT_FAILURE:
      return {
        ...state,
        createHospitalAgent: { ...state.createHospitalAgent, error: payload }
      };
    default:
      return null;
  }
};
