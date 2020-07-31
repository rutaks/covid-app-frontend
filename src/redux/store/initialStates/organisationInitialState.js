export const organisationInitialState = {
  organisationPayload: {
    content: [],
    totalPages: 0,
    totalElements: 0
  },
  getOrganisations: {
    success: false,
    loading: false,
    message: null,
    error: null
  },
  getOrganisation: {
    payload: null,
    success: false,
    loading: false,
    message: null,
    error: null
  },
  createOrganisation: {
    success: false,
    loading: false,
    message: null,
    error: null
  },
  editOrganisation: {
    success: false,
    loading: false,
    message: null,
    error: null
  },
  deleteOrganisation: {
    success: false,
    loading: false,
    message: null,
    error: null
  }
};
