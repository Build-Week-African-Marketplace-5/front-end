import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    username: Yup.string().trim().required('enter your username!'),
    password: Yup.string().required('enter your password!')
})

const signupSchema = Yup.object().shape({
    username: Yup.string().trim().required('You need to create a username').min(5,'minimum 5 characters').max(36,'max, 36 characters'),
    password: Yup.string().trim().required('You need to assign a password').min(5,'minimum 5 characters').max(36,'max, 36 characters'),
})

export default signupSchema;
export {loginSchema};