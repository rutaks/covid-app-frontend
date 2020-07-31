import { initialState } from '../../store/initialStates/';
import getHospitalsReducer from './getHospitalsReducer';
import createHospitalReducer from './createHospitalReducer';
/**
 * A function that provides reducer based on action currently being used
 * @param {Object} state - the current state being used, by default is the user state
 * @param {Object} action - action type to be applied
 * @since version 1.0
 */
export default (state = initialState.hospital, action) => {
  const getHospitals = getHospitalsReducer(state, action);
  const createHospital = createHospitalReducer(state, action);
  return getHospitals || createHospital || state;
};
