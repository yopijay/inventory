// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

//Request
import { options } from '../../../../../core/request/Request';

// Context
import { FormContext } from '../../../../../core/context/FormContext';

const Form = (props) => {
    const { register, errors, getValues, disabled= false } = props;
    const { isLoad, setIsload, chck, setChck, setOpt } = useContext(FormContext);
    const [ categories, setCategories ] = useState();

    useEffect(() => {
        options('category', ['id', 'name'], setCategories, setIsload);
    }, []);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Category" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 5px' }}>
                        {
                            !isLoad ? (
                                <Ctrl.Select name= "category_id" disabled= { disabled } fullWidth variant= "standard" InputProps= {{ disableUnderline: true }}
                                    value= { getValues().category_id !== undefined ? categories !== undefined ? getValues().category_id : '' : '' }
                                    register= { register('category_id', {
                                        onChange: e => setOpt(e.target.value)
                                    }) } options= { categories !== undefined ? categories : [] } />
                            ) : (
                                <Skeleton variant= "rectangular" width= "100%" height= "45px" sx= {{ backgroundColor: '#dfe6e9', borderRadius: '5px' }} />
                            )
                        }
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.category_id === undefined ? '' : errors.category_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Name" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "name" variant= "standard" fullWidth register= { register('name', {}) } disabled= { disabled } InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Description" color= "#2c3e50" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                        <Ctrl.TextField name= "description" variant= "standard" fullWidth disabled= { disabled } register= { register('description', {}) } InputProps= {{ disableUnderline: true }} />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.description === undefined ? '' : errors.description.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Status" color= "#2c3e50" /></Box>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Box>
                            <Ctrl.Checkbox name= "status" disabled= { disabled } checked= { getValues().status !== undefined ? getValues().status > 0 ? true : false : true }
                                register= { register('status', {
                                    onChange: () => setChck(!chck)
                                }) } />
                        </Box>
                        <Box><Ctrl.Typography color= "#2c3e50" text= "Active" /></Box>
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.status === undefined ? '' : errors.status.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Form;