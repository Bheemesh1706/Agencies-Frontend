import * as yup from "yup";

const RegisterSchema = yup.object().shape({
    AgencyName: yup.string().required().min(5, 'Must be exactly 5 digits'),
    Name: yup.string().required().min(5, 'Must be exactly 5 digits'),
    Password : yup.string().required('Password is required'),
    ConfirmPassword : yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match'),
    Address : yup.string().required(),
    City : yup.string().required(),
    Area : yup.string().required(),
    Code : yup.string().required(),
  });

export {RegisterSchema}; 