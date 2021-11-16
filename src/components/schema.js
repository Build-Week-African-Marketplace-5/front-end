import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    username: Yup.string().trim().required('enter your username!'),
    password: Yup.string().required('enter your password!')
})

const signupSchema = Yup.object().shape({
    username: Yup.string().trim().required('You need to create a username').min(3,'minimum 3 characters').max(30,'max, 30 characters'),
    password: Yup.string().trim().required('You need to assign a password').min(5,'minimum 5 characters').max(200,'max, 200 characters'),
})

export default signupSchema;
export {loginSchema};