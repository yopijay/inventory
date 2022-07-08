import * as Yup from 'yup';

export const Department = () => (
    Yup.object({
        name: Yup.string().required('This field is required!'),
    })
);