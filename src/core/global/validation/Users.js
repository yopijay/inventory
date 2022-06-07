import * as Yup from 'yup';

export const Users = () => (
    Yup.object({
        fname: Yup.string().required('This field is required!'),
        mname: Yup.string(),
        lname: Yup.string().required('This field is required!'),
    })
);