import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  names: Yup.string().required('Organisation Name must be provided')
});
