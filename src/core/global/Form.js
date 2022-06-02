// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../global/controls/Controls';
import { formatValue, getDefaultValue } from './Function';

const Form = (props) => {
    const { json, register, setValue, errors, setValues, values } = props;
    const [ options, setOptions ] = useState();

    useEffect(() => {
        getDefaultValue('category_id', 'category_id', setOptions);

    }, []);
    
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
            {
                (json).map((field, index) => (
                    <Grid item key= { index } { ...(field.grid) }>
                        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Box marginBottom= "5px"><Ctrl.Typography text= { field.label } className= { `f-${ field.labelSize }` } color= { field.color } /></Box>
                            {
                                (field.child).length === 0 ? (
                                    field.type === 'checkbox' ? (
                                        <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                                            <Box>
                                                <Ctrl.Checkbox { ...(field.props) } 
                                                    defaultChecked= { true }
                                                    register= { register(field.props.name, {}) } />
                                            </Box>
                                            <Box><Ctrl.Typography className= { `f-${ field.labelSize }` } text= { field.props.placeholder } /></Box>
                                        </Box>
                                    ) : (
                                        field.type === 'select' ? (
                                            <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                                                <Ctrl.Select { ...(field.props) } 
                                                    defaultValue= "1"
                                                    register= { register(field.props.name, {}) } options= { options } />
                                            </Box>
                                        ) : (
                                            <Ctrl.TextField { ...(field.props) } register= { register(field.props.name, {}) } />
                                        )
                                    )
                                ) : (
                                    ''
                                )
                            }
                            <Box padding= "0 10px" marginTop= "5px">
                                <Ctrl.Typography className= "f-14" text= { errors[field.props.name] === undefined ? '' : errors[field.props.name].message } color= "red" />
                            </Box>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Form;