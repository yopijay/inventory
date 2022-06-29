import * as Yup from 'yup';

export const Customer = () => (
    Yup.object({
        name: Yup.string().required('This field is required!'),
    })
);