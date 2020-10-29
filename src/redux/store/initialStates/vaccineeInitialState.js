export const vaccineeInitialState = {
  getVaccinees: {
    success: false,
    loading: false,
    message: null,
    error: null,
    payload: {
      content: [],
      totalPages: 0,
      totalElements: 0
    }
  },
  createVaccinee: {
    success: false,
    loading: false,
    message: null,
    error: null
  }
};
