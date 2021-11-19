import * as yup from 'yup';


const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required()
        .min(5, 'Username must be at least 5 characters.'),
    password: yup
        .string()
        .trim()
        .required()
        .min(5, 'Password must be at least 5 characters.'),
});

export default formSchema;