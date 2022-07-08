import * as Yup from 'yup';

export const Position = () => (
    Yup.object({
        name: Yup.string().required('This field is required!'),
    })
);