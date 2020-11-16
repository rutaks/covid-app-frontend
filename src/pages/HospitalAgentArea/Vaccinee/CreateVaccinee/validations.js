import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const validationSchema = Yup.object().shape({
  names: Yup.string().required('Vaccinee Name must be provided'),
  email: Yup.string().email('Invalid email'),
  phone: Yup.string().required('Phone number is required').matches(phoneRegExp, 'Invalid phone number'),
  dob: Yup.date('Invalid date').required('Date Of Birth is required')
});
