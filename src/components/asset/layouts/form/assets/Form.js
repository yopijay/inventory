// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';
import { options, optionsPer } from '../../../../../core/request/Request';

const Form = (props) => {
    const { register, errors, getValues } = props;
    const [ categories, setCategories ] = useState();
    const [ brands, setBrands ] = useState();
    // eslint-disable-next-line
    const [ opt, setOpt ] = useState();
    const [ chck, setChck ] = useState();

    useEffect(() => {
        options('category', ['id', 'name'], setCategories);
        if(getValues().category_id !== undefined) optionsPer('brand', ['id', 'name'], setBrands, getValues().category_id);
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
                                onChange: e => optionsPer('brand', ['id', 'name'], setBrands, e.target.value)
                            }) } options= { categories !== undefined ? categories : [] } />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.category_id === undefined ? '' : errors.category_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Brand" className= "f-15" color= "#2c3e50" /></Box>
                    <Box border= "solid 1px #9E9E9E" borderRadius= "5px">
                        <Ctrl.Select name= "brand_id" size= "small" padding= "12px 15px 8px 15px" 
                            value= { getValues().brand_id !== undefined ? getValues().brand_id : '' }
                            register= { register('brand_id', {
                                onChange: e => setOpt(e.target.value)
                            }) } options= { brands !== undefined ? brands : [] } />
                    </Box>
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.brand_id === undefined ? '' : errors.brand_id.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Asset name" className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "name" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" register= { register('name', {}) } />
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Quantity" className= "f-15" color= "#2c3e50" /></Box>
                    <Ctrl.TextField name= "quantity" type= "number" border= "solid 1px #bdc3c7" radius= "5px" padding= "12px 15px 8px 15px" size= "small" register= { register('quantity', {}) } />
                    <Box padding= "0 10px" marginTop= "5px">
                        <Ctrl.Typography className= "f-14" text= { errors.quantity === undefined ? '' : errors.quantity.message } color= "red" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= { 12 }>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box marginBottom= "5px"><Ctrl.Typography text= "Status" className= "f-15" color= "#2c3e50" /></Box>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Box>
                            <Ctrl.Checkbox name= "status" radius= "5px" padding= "12px 15px 8px 15px" size= "small"
                                checked= { getValues().status !== undefined ? getValues().status > 0 ? true : false : true }
                                register= { register('status', {
                                    onChange: () => setChck(!chck)
                                }) } />
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