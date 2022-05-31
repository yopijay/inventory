import * as Yup from 'yup';

export const AssignAssets = () => (
    Yup.object({
        category_id: Yup.string().required('This field is required!'),
        brand_id: Yup.string().required('This field is required!'),
        user_id: Yup.string().required('This field is required!'),
        quantity: Yup.string().required('This field is required!')
    })
);