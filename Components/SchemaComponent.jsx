import * as yup from "yup";

const RegisterSchema = yup.object().shape({
    AgencyName: yup.string().required().min(5).max(10).matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
    Name: yup.string().required().min(10).max(25).matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
    Password : yup.string().required('Password is required').min(8).max(15).matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/,'Password must contain atleast one speacial charecter, digit and a capital letter'),
    ConfirmPassword : yup.string().oneOf([yup.ref('Password'), null], 'Passwords doesn\'t match'),
    Address : yup.string().required().min(10).max(50).matches(/^[a-zA-Z0-9\s,'-:/]+$/, "Only alphabets and special charecters like ':-/ are allowed"),
    City : yup.string().required().min(4).max(20).matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
    Area : yup.string().required().min(5).max(30).matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
    Code : yup.string().required().min(7).max(7).matches(/^[0-9]+$/, "Must be only digits"),
  });

const LoginSchema = yup.object().shape({
    Name: yup.string().required().min(10).max(25).matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
    Password : yup.string().required('Password is required').min(8).max(15).matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/,'Password must contain atleast one speacial charecter, digit and a capital letter'),
  });
  
export {RegisterSchema,LoginSchema}; 