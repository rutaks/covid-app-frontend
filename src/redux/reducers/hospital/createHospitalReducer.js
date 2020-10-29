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
        createHospital: { ...state.createHospital, loading: false, success: false }
      };
    case actionTypes.hospital.CREATE_HOSPITAL_SUCCESS:
      return {
        ...state,
        //TODO: REFACTOR FOR PAGINATION
        // hospitalPayload: {
        //   ...state.hospitalPayload,
        //   content: [...state.hospitalPayload.content, payload]
        // },
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
