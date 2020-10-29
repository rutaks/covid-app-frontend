import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.vaccinee.CREATE_VACCINEE_START:
      return {
        ...state,
        createVaccinee: {
          ...state.createVaccinee,
          success: false,
          message: null,
          loading: true,
          error: null
        }
      };
    case actionTypes.vaccinee.CREATE_VACCINEE_END:
      return {
        ...state,
        createVaccinee: {
          ...state.createVaccinee,
          loading: false,
          success: false,
          error: null
        }
      };
    case actionTypes.vaccinee.CREATE_VACCINEE_SUCCESS:
      return {
        ...state,
        getVaccinees: {
          ...state.getVaccinees,
          payload: {
            ...state.getVaccinees.payload,
            //TODO: REFACTOR FOR PAGINATION
            content: [...state.getVaccinees.payload.content, payload]
          }
        },
        createVaccinee: { ...state.createVaccinee, success: true }
      };
    case actionTypes.vaccinee.CREATE_VACCINEE_FAILURE:
      return {
        ...state,
        createVaccinee: { ...state.createVaccinee, error: payload }
      };
    default:
      return null;
  }
};
