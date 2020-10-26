import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  names: Yup.string().required('Agent Name must be provided'),
  hospital: Yup.string().required('Hospital must be provided'),
  email: Yup.string().required('Email must be provided').email(),
  phone: Yup.string().required('Phone must be provided')
});
