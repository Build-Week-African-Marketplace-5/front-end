import * as yup from 'yup';

const listingSchema =yup.object().shape({
        name: yup
            .string()
            .required('Item name required.'),
        price: yup
            .number()
            .required('Item price required'),
        description: yup
            .string()
            .required('Item description required')
            .min(10, 'Description must be 10 characters'),
})
export default listingSchema;