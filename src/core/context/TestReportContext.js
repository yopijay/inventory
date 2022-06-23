// LIbraries
import React, { createContext } from 'react';
import { useForm } from 'react-hook-form';

export const TestReportContext = createContext();

export const TestReportProvider = (props) => {
    const { register, handleSubmit, control, getValues, formState: { errors } } = useForm();

    return (
        <TestReportContext.Provider value= {{ register, handleSubmit, control, getValues, errors }}>
            { props.children }
        </TestReportContext.Provider>
    )
}