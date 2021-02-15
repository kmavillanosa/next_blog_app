import * as yup from 'yup';

const createblogvalidation = yup.object({
    subject: yup
      .string()
      .nullable()
      .required('Subject is required'),
    description: yup
      .string()
      .nullable()
      .required('Description is required'),
  });
  

  export default createblogvalidation;