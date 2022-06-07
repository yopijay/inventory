// Libraries
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

//Request
import { options } from '../../../../core/request/Request';

const Form = (props) => {
    const { register, errors, getValues } = props;
    const [ categories, setCategories ] = useState();

    useEffect(() => {
        options('category', ['id', 'name'], setCategories);
    }, []);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Category" className= "f-15" color= "#2c3e50" /></Box>
                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                        <Ctrl.Select name= "category_id" size= "small" padding= "12px 15px 8px 15px" 
                            value= { getValues().category_id !== undefined ? getValues().category_id : '1' }
                            register= { register('category_id', {
                                onChange: e => console.log(e)
                            }) } options= { categories !== undefined ? categories : [] } />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.category_id === undefined ? '' : errors.category_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Name" className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "name" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" register= { register('name', {}) } />
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Description" className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "description" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" register= { register('description', {}) } />
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.description === undefined ? '' : errors.description.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Status" className= "f-15" color= "#2c3e50" /></Box>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Box>
                            <Ctrl.Checkbox name= "status" radius= "5px" padding= "12px 15px 8px 15px" size= "small"
                                defaultChecked= { true }
                                register= { register('status', {}) } />
                        </Box>
                        <Box><Ctrl.Typography className= "f-15" text= "Active" /></Box>
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