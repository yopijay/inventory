import * as Yup from 'yup';

export const Category = () => (
    Yup.object({
        name: Yup.string().required('This field is required!'),
    })
);