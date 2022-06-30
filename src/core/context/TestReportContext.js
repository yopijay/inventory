// LIbraries
import React, { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';

export const TestReportContext = createContext();

export const TestReportProvider = (props) => {
    const [ testreport, setTestreport ] = useState();
    const { register, handleSubmit, control, getValues, formState: { errors }, setValue } = useForm();

    return (
        <TestReportContext.Provider value= {{ register, handleSubmit, control, getValues, errors, setValue, testreport, setTestreport }}>
            { props.children }
        </TestReportContext.Provider>
    )
}