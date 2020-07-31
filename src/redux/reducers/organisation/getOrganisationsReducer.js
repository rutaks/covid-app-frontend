import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.organisation.GET_ORGANISATIONS_START:
      return {
        ...state,
        organisationPayload: {},
        getOrganisations: { success: false, message: null, loading: true, error: null }
      };
    case actionTypes.organisation.GET_ORGANISATIONS_END:
      return {
        ...state,
        getOrganisations: { ...state.getOrganisations, loading: false }
      };
    case actionTypes.organisation.GET_ORGANISATIONS_SUCCESS:
      return {
        ...state,
        organisationPayload: payload,
        getOrganisations: { ...state.getOrganisations, success: true }
      };
    case actionTypes.organisation.GET_ORGANISATIONS_FAILURE:
      return {
        ...state,
        getOrganisations: { ...state.getOrganisations, error: payload }
      };
    default:
      return null;
  }
};
