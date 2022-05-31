// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../global/controls/Controls';
import { formatValue, getDefaultValue } from './Function';

const Form = (props) => {
    const { json, register, setValue, errors, setValues, values } = props;

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
            {
                (json).map((data, index) => (
                    <Grid item { ...(data.grid) } key= { index }>
                        {
                            (data.child).length === 0 ? <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Box marginBottom= "5px"><Ctrl.Typography text= { data.label } className= "f-13" color= "#2c3e50" /></Box>
                                <Ctrl.TextField { ...(data.props) } 
                                    register= { register(data.props.name, { 
                                            onChange: e => { setValue(data.props.name, data.format === '' ? e.target.value : data.format === 'text' ? 
                                                (e.target.value).replace(/[^a-zA-Z -]/g, '') : 
                                                formatValue(data.formatType, (e.target.value).replace(/[^\d-]/g, ''))) } }) } />
                                <Box padding= "0 10px" marginTop= "5px">
                                    <Ctrl.Typography className= "f-14" text= { errors[data.props.name] === undefined ? '' : errors[data.props.name].message } color= "red" />
                                </Box>
                            </Box> : <Box>
                                <Box marginBottom= "5px"><Ctrl.Typography text= { data.label } className= "f-13" color= "#2c3e50" /></Box>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    {
                                        (data.child).map((info, index) => (
                                            <Grid { ...(info.grid) } item key= { index }>
                                                { 
                                                    info.type === "select" ? 
                                                        <Box padding= "12px 8px 8px 8px" border= "solid 1px #9E9E9E" borderRadius= "5px">
                                                            <Ctrl.Select { ...(info.props) }
                                                                // value= { values === undefined ? getDefaultValue(info.props.name, values).value : 
                                                                //     values[info.props.name] !== undefined ? values[info.props.name] : getDefaultValue(info.props.name, values).value } 
                                                                register= { register(info.props.name, { onChange: e => { setValues({ ...values, [info.props.name]: e.target.value }) } }) }
                                                                options= { async() => await getDefaultValue(info.props.name, info.props.name) } />
                                                                <Box padding= "0 10px" marginTop= "5px">
                                                                    <Ctrl.Typography className= "f-14" text= { errors[info.props.name] === undefined ? '' : errors[info.props.name].message } color= "red" />
                                                                </Box>
                                                        </Box> :
                                                    info.type === 'checkbox' ?
                                                        <Box sx= {{ display: 'flex', direction: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '5px' }}>
                                                            <Box>
                                                                <Ctrl.Checkbox name= { info.props.name } 
                                                                    register= { register(info.props.name) } { ...(info.props) } />
                                                            </Box>
                                                            <Ctrl.Typography className= "f-14" text= { info.props.placeholder } />
                                                        </Box> :
                                                    <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                                        <Ctrl.TextField register= { register(info.props.name) } { ...(info.props) } inputProps= {{ maxLength: info.max }}  />
                                                        <Box padding= "0 10px" marginTop= "5px">
                                                            <Ctrl.Typography className= "f-14" text= { errors[info.props.name] === undefined ? '' : errors[info.props.name].message } color= "red" />
                                                        </Box>
                                                    </Box>
                                                }
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        }
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Form;