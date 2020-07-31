import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.hospital.CREATE_HOSPITAL_START:
      return {
        ...state,
        createHospital: { success: false, message: null, loading: true, error: null }
      };
    case actionTypes.hospital.CREATE_HOSPITAL_END:
      return {
        ...state,
        createHospital: { ...state.createHospital, loading: false }
      };
    case actionTypes.hospital.CREATE_HOSPITAL_SUCCESS:
      return {
        ...state,
        hospitalPayload: {
          ...state.hospitalPayload,
          content: [payload, ...state.hospitalPayload.content]
        },
        createHospital: { ...state.createHospital, success: true }
      };
    case actionTypes.hospital.CREATE_HOSPITAL_FAILURE:
      return {
        ...state,
        createHospital: { ...state.createHospital, error: payload }
      };
    default:
      return null;
  }
};
