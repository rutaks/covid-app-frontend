import { actionTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.organisation.CREATE_ORGANISATION_START:
      return {
        ...state,
        createOrganisation: { success: false, message: null, loading: true, error: null }
      };
    case actionTypes.organisation.CREATE_ORGANISATION_END:
      return {
        ...state,
        createOrganisation: { ...state.createOrganisation, loading: false, success: false }
      };
    case actionTypes.organisation.CREATE_ORGANISATION_SUCCESS:
      return {
        ...state,
        //TODO: REFACTOR FOR PAGINATION
        // organisationPayload: {
        //   ...state.organisationPayload,
        //   content: [payload, ...state.organisationPayload.content]
        // },
        createOrganisation: { ...state.createOrganisation, success: true }
      };
    case actionTypes.organisation.CREATE_ORGANISATION_FAILURE:
      return {
        ...state,
        createOrganisation: { ...state.createOrganisation, error: payload }
      };
    default:
      return null;
  }
};
