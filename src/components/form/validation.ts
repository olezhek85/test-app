import { object, string } from 'yup';

export const validationSchema = object().shape({
  firstName: string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: string().email('Invalid email').required('Required'),
});
