import * as Yup from 'yup';

export const Brand = () => (
    Yup.object({
        category_id: Yup.string().required('This field is required!'),
        name: Yup.string().required('This field is required!'),
    })
);