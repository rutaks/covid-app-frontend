import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username must be provided,'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
