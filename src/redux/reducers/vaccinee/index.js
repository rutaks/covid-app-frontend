import { initialState } from '../../store/initialStates/';
import getVaccineesReducer from './getVaccineesReducer';
import createVaccineeReducer from './createVaccineeReducer';

/**
 * A function that provides reducer based on action currently being used
 * @param {Object} state - the current state being used, by default is the user state
 * @param {Object} action - action type to be applied
 * @since version 1.0
 */
export default (state = initialState.vaccinee, action) => {
  const getVaccinees = getVaccineesReducer(state, action);
  const createVaccinee = createVaccineeReducer(state, action);
  return getVaccinees || createVaccinee || state;
};
