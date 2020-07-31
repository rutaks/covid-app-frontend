import { initialState } from '../../store/initialStates';
import getOrganisationsReducer from './getOrganisationsReducer';
import createOrganisationReducer from './createOrganisationReducer';
/**
 * A function that provides reducer based on action currently being used
 * @param {Object} state - the current state being used, by default is the user state
 * @param {Object} action - action type to be applied
 * @since version 1.0
 */
export default (state = initialState.organisation, action) => {
  const getOrganisations = getOrganisationsReducer(state, action);
  const createOrganisation = createOrganisationReducer(state, action);
  return getOrganisations || createOrganisation || state;
};
