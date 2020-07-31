import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  names: Yup.string().required('Hospital Name must be provided')
});
