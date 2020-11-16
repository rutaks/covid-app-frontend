import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.vaccinee.GET_VACCINEES_START:
      return {
        ...state,
        getVaccinees: { ...state.getVaccinees, success: false, message: null, loading: true, error: null }
      };
    case actionTypes.vaccinee.GET_VACCINEES_END:
      return {
        ...state,
        getVaccinees: { ...state.getVaccinees, loading: false }
      };
    case actionTypes.vaccinee.GET_VACCINEES_SUCCESS:
      return {
        ...state,
        getVaccinees: {
          ...state.getVaccinees,
          // payload,
          //TODO: REFACTOR FOR PAGINATION
          payload: { ...state.getVaccinees.payload, content: payload },
          success: true
        }
      };
    case actionTypes.vaccinee.GET_VACCINEES_FAILURE:
      return {
        ...state,
        getVaccinees: { ...state.getVaccinees, error: payload }
      };
    default:
      return null;
  }
};
