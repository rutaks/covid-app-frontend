export const hospitalInitialState = {
  hospitalPayload: {
    content: [],
    totalPages: 0,
    totalElements: 0
  },
  getHospitals: {
    success: false,
    loading: false,
    message: null,
    error: null
  },
  getHospital: {
    payload: null,
    success: false,
    loading: false,
    message: null,
    error: null
  },
  createHospital: {
    success: false,
    loading: false,
    message: null,
    error: null
  },
  editHospital: {
    success: false,
    loading: false,
    message: null,
    error: null
  },
  deleteHospital: {
    success: false,
    loading: false,
    message: null,
    error: null
  }
};
