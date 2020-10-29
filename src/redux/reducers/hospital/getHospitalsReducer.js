import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.hospital.GET_HOSPITALS_START:
      return {
        ...state,
        productPayload: {},
        getHospitals: { success: false, message: null, loading: true, error: null }
      };
    case actionTypes.hospital.GET_HOSPITALS_END:
      return {
        ...state,
        getHospitals: { ...state.getHospitals, loading: false }
      };
    case actionTypes.hospital.GET_HOSPITALS_SUCCESS:
      return {
        ...state,
        // hospitalPayload: payload,
        //TODO: REFACTOR FOR PAGINATION
        hospitalPayload: { content: payload },
        getHospitals: { ...state.getHospitals, success: true }
      };
    case actionTypes.hospital.GET_HOSPITALS_FAILURE:
      return {
        ...state,
        getHospitals: { ...state.getHospitals, error: payload }
      };
    default:
      return null;
  }
};
