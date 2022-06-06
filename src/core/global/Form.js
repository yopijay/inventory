// Libraries
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../global/controls/Controls';

// Request
import { options } from '../request/Request';

const Form = (props) => {
    const { fields, register, errors, getValues, values, setValues } = props;
    const [ chck, setChck ] = useState();
    // eslint-disable-next-line
    const [ opt, setOpt ] = useState();

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
            {
                (Object.keys(fields())).map((field, index) => (
                    <Grid item key= { index } { ...(fields()[field].grid) }>
                        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Box marginBottom= "5px"><Ctrl.Typography text= { fields()[field].label } className= { `f-${ fields()[field].labelSize }` } color= { fields()[field].color } /></Box>
                            {
                                fields()[field].type === 'checkbox' ? ( 
                                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                                        <Box>
                                            <Ctrl.Checkbox { ...(fields()[field].props) } 
                                                checked= { getValues()[field] !== undefined ? getValues()[field] > 0 ? true : false : true }
                                                register= { register(field, {
                                                    onChange: () => setChck(!chck)
                                                }) } />
                                        </Box>
                                        <Box><Ctrl.Typography className= { `f-${ fields()[field].labelSize }` } text= { fields()[field].props.placeholder } /></Box>
                                    </Box>
                                ) : (
                                    fields()[field].type === 'select' ? (
                                        <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                                            { console.log() }
                                            <Ctrl.Select { ...(fields()[field].props) } 
                                                value= { getValues()[field] !== undefined ? getValues()[field] : 
                                                                field === 'bmonth' ? new Date().getMonth() + 1 :
                                                                field === 'bday' ? new Date().getDate() :
                                                                field === 'byear' ? new Date().getFullYear() : '1' }
                                                register= { register(field, {
                                                    onChange: e => { setOpt(e.target.value) }
                                                }) } options= { fields()[field].option } />
                                        </Box>
                                    ) : (
                                        <Ctrl.TextField { ...(fields()[field].props) } register= { register(field, {}) } />
                                    )
                                )
                            }
                            <Box padding= "0 10px" marginTop= "5px">
                                <Ctrl.Typography className= "f-14" text= { errors[fields()[field].props.name] === undefined ? '' : errors[fields()[field].props.name].message } color= "red" />
                            </Box>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Form;