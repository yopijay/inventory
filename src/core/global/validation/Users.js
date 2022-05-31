import * as Yup from 'yup';

export const Users = () => (
    Yup.object({
        fname: Yup.string().required('This field is required!'),
        mname: Yup.string().required('This field is required!'),
        lname: Yup.string().required('This field is required!'),
    })
);