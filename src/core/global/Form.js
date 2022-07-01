// Libraries
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../global/controls/Controls';

const Form = (props) => {
    const { fields, register, errors, getValues, disabled = false } = props;
    const [ chck, setChck ] = useState();
    // eslint-disable-next-line
    const [ opt, setOpt ] = useState();
    // getValues()[field] !== undefined || getValues()[field] !== null ? getValues()[field] !== null ? getValues()[field] : 
    // field === 'bmonth' ? new Date().getMonth() + 1 :
    // field === 'bday' ? new Date().getDate() :
    // field === 'byear' ? new Date().getFullYear() : '' : ''
    
    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
            {
                (Object.keys(fields())).map((field, index) => (
                    <Grid item key= { index } { ...(fields()[field].grid) }>
                        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Box marginBottom= "5px"><Ctrl.Typography text= { fields()[field].label } color= { fields()[field].color } /></Box>
                            {
                                fields()[field].type === 'checkbox' ? ( 
                                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                                        <Box>
                                            <Ctrl.Checkbox { ...(fields()[field].props) } 
                                                disabled= { disabled }
                                                checked= { getValues()[field] !== undefined ? getValues()[field] > 0 ? true : false : true }
                                                register= { register(field, {
                                                    onChange: () => setChck(!chck)
                                                }) } />
                                        </Box>
                                        <Box><Ctrl.Typography color= "#2c3e50" text= { fields()[field].props.placeholder } /></Box>
                                    </Box>
                                ) : (
                                    fields()[field].type === 'select' ? (
                                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 5px' }}>
                                            { console.log() }
                                            <Ctrl.Select { ...(fields()[field].props) } 
                                                disabled= { disabled }
                                                fullWidth
                                                variant= "standard"
                                                InputProps= {{ disableUnderline: true }}
                                                value= { getValues()[field] !== undefined ? getValues()[field] !== null ? getValues()[field] : '' :
                                                                field === 'bmonth' ? new Date().getMonth() + 1 :
                                                                field === 'bday' ? new Date().getDate() :
                                                                field === 'byear' ? new Date().getFullYear() :
                                                                field === 'civil_status' ? 'single' : '' }
                                                register= { register(field, {
                                                    onChange: e => setOpt(e.target.value)
                                                }) } options= { fields()[field].option } />
                                        </Box>
                                    ) : (
                                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                                            <Ctrl.TextField register= { register(field, {}) } InputProps= {{ disableUnderline: true }} variant= "standard" fullWidth disabled= { disabled } />
                                        </Box>
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